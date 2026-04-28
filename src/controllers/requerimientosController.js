const { env } = require("process");
const RequerimientoModel = require("../models/requerimientosModel");
const DocenteModel = require("../models/docentesModel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.frro.utn.edu.ar",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

class RequerimientoController {
  formatearFechas(requerimientos) {
    requerimientos.forEach((requerimiento) => {
      requerimiento.fechaInicio = requerimiento.fechaInicio
        .toISOString()
        .slice(0, 10);
      requerimiento.fechaFin = requerimiento.fechaFin
        .toISOString()
        .slice(0, 10);
    });
  }

  getAllRequerimientos(req, res) {
    RequerimientoModel.getAllRequerimientos((err, requerimientos) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error al obtener los requerimientos", detalle: err });
      } else {
        res.json(requerimientos);
      }
    });
  }

  getRequerimientoById(req, res) {
    const id = req.params.id;
    RequerimientoModel.getRequerimientoById(id, (err, requerimiento) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener el requerimiento" });
      } else {
        res.json(requerimiento[0]);
      }
    });
  }

  getRequerimientoByIdDocente(req, res) {
    const id = req.params.id;
    RequerimientoModel.getRequerimientoByIdDocente(
      id,
      (err, requerimientos) => {
        if (err) {
          res.status(500).json({ error: "Error al obtener el requerimiento" });
        } else {
          res.json(requerimientos);
        }
      },
    );
  }

  createRequerimiento(req, res) {
    const requerimiento = req.body;
    RequerimientoModel.createRequerimiento(
      requerimiento,
      (err, requerimiento) => {
        if (err) {
          res.status(500).json({ error: "Error al crear el requerimiento" });
        } else {
          res.json(requerimiento);
        }
      },
    );
  }

  updateRequerimiento(req, res) {
    const id = req.params.id;
    const requerimientoNuevo = req.body;

    requerimientoNuevo.fechaInicio = new Date(requerimientoNuevo.fechaInicio);
    requerimientoNuevo.fechaFin = new Date(requerimientoNuevo.fechaFin);

    RequerimientoModel.getRequerimientoById(id, (err, requerimientoViejo) => {
      requerimientoViejo = requerimientoViejo[0];

      if (err || !requerimientoViejo) {
        return res
          .status(500)
          .json({ error: "Error al obtener el requerimiento anterior" });
      }

      RequerimientoModel.updateRequerimiento(
        id,
        requerimientoNuevo,
        (err, actualizado) => {
          if (err) {
            return res
              .status(500)
              .json({ error: "Error al actualizar el requerimiento" });
          }

          if (requerimientoViejo.estado !== requerimientoNuevo.estado) {
            DocenteModel.getDocenteByLegajo(
              requerimientoViejo.legajoDocente,
              async (err, results) => {
                let mailEnviado = false;

                if (!err && results && results.length > 0) {
                  const docente = results[0];

                  if (docente.email) {
                    try {
                      await transporter.sendMail({
                        from: process.env.MAIL_USER,
                        to: docente.email,
                        subject: "Actualización de requerimiento",
                        html: `
                    <h3>Tu requerimiento fue actualizado</h3>
                    <p><b>Estado anterior:</b> ${requerimientoViejo.estado}</p>
                    <p><b>Nuevo estado:</b> ${requerimientoNuevo.estado}</p>
                    <p><b>Comentario:</b> ${requerimientoNuevo.comentarioEncargado || "Sin comentario"}</p>
                  `,
                      });
                      mailEnviado = true;
                    } catch (e) {
                      console.error("Error enviando mail:", e);
                    }
                  }
                }

                console.log(mailEnviado);

                return res.json({
                  requerimiento: actualizado,
                  mailEnviado: mailEnviado,
                });
              },
            );
          } else {
            return res.json({
              requerimiento: actualizado,
              mailEnviado: false,
            });
          }
        },
      );
    });
  }

  deleteRequerimiento(req, res) {
    const id = req.params.id;
    RequerimientoModel.deleteRequerimiento(id, (err, requerimiento) => {
      if (err) {
        res.status(500).json({ error: "Error al eliminar el requerimiento" });
      } else {
        res.json(requerimiento);
      }
    });
  }
}

module.exports = new RequerimientoController();
