const { create, update } = require("../../services/contacts");

module.exports = async (req, res) => {
    let { id } = req.params;
    const { name, email, phone, birthday } = req.body;

    try {
        const user = await update(id, name, email, phone, birthday);
        return res.json(user);
    } catch {
        return res
            .status(404)
            .json({ code: 404, message: 'Contact not found' });
    }
};