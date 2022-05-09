const nodemailer = require('nodemailer');
const { byId } = require('./contacts');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const createMessage = (to, subject, text) => ({
    from: `${process.env.SMTP_FROM} <${process.env.SMTP_USER}>`,
    to,
    subject,
    text
});

const sendMessage = async (id, subject, body) => {
    const { email } = await byId(id);
    const message = createMessage(email, subject, body);

    return transporter.sendMail(message);
}

module.exports = { sendMessage };