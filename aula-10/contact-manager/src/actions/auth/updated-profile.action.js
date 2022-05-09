const { updateUser } = require("../../services/auth");

module.exports = async (req, res) => {
    const { user } = req.session;
    const { name, email, password } = req.body;

    req.session.user = await updateUser(user._id, name, email, password);

    return res.redirect('/auth/profile');
}