const { Router } = require("express");
const nodemailer = require("nodemailer");
const contacto = new Router();

contacto.get("/contacto", (req, res) => {
    res.render("contacto");
});

contacto.post("/send-email", (req, res) => {
    const nombre = req.body.nombre;
    const asunto = req.body.asunto;
    const mensaje = req.body.mensaje;
    const email = req.body.email;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    })
    // Message object
let message = {
    from: "Remitente",
    to: "rich0194@gmail.com",
    subject: `${asunto}`,
    html: `<h1> Mensaje de ${nombre} para CannaSalud: ${mensaje}, Contacto: ${email}</h1>`,
};


transporter.sendMail(message, (error, info) => {
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.render("enviado");
        res.status(200).jsonp(reqbody);
    }
});

});

module.exports = contacto;
