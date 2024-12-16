// Importamos la librería oficial de Brevo
const Brevo = require('@getbrevo/brevo');

// Configuramos el cliente de la API de Brevo
const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

const sendMail = async (to, code) => {
    try {
        const emailData = {
            sender: {
                name: "Mi App",
                email: process.env.EMAIL_REMITENTE,
            },
            to: [
                {
                    email: to,
                },
            ],
            subject: "Código de Verificación",
            htmlContent: `<p>Tu código de verificación es: <strong>${code}</strong></p>`,
            textContent: `Tu código de verificación es: ${code}`,
        };

        const response = await brevoClient.sendTransacEmail(emailData);

        console.log("Mensaje enviado: %s", response.messageId);
        return {
            success: true,
            messageId: response.messageId,
        };
    } catch (error) {
        console.error("Error al enviar el correo: ", error);
        throw error;
    }
};

module.exports = sendMail;