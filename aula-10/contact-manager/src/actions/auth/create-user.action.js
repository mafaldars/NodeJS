const { createUser } = require("../../services/auth");

module.exports = async (req, res) => {
    const { name, email, username, password } = req.body;

    await createUser(name, email, username, password);

    return res.redirect('/auth/login');
}