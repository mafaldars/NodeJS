const { create, update } = require("../../services/contacts");

module.exports = async (req, res) => {
    const { name, email, phone, birthday } = req.body;
    const { user } = req.session;

    const contact = await create(name, email, phone, birthday, null, user);

    return res.status(201).json(contact);
};