const { sendMessage } = require("../../services/messages");

module.exports = async (req, res) => {
    const { id } = req.params;
    const { subject, message } = req.body;

    await sendMessage(id, subject, message);

    return res.redirect(`/contacts/${id}`);
}