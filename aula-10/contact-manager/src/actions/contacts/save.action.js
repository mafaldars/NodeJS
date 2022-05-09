const { create, update } = require("../../services/contacts");

module.exports = async (req, res) => {
    let { id } = req.params;
    const { name, email, phone, birthday } = req.body;
    const { user } = req.session;
    const image = req.files?.image;

    if (id === 'add') {
        const contact = await create(name, email, phone, birthday, image, user);
        id = contact.id;
    } else {
        try {
            await update(id, name, email, phone);
        } catch {
            return res
                .status(404)
                .render('error', { code: 404, message: 'Contact not found' });
        }
    }

    return res.redirect(`/contacts/${id}`);
};