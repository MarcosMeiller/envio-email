const sendMail = require("../utils/sendMail");

const sendMailController = async (req, res) => {
    try {
        const { mail } = req.body;

        if (!mail) {
            return res.status(400).json({ error: "El campo 'mail' es obligatorio" });
        }

        const code = Math.floor(100000 + Math.random() * 900000);

        const response = await sendMail(mail, code);
        
        res.status(200).json({ success: true, message: "Correo enviado", data: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { sendMail: sendMailController };
