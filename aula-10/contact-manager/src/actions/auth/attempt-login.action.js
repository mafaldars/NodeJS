const { attemptLogin } = require("../../services/auth");

module.exports = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await attemptLogin(username, password);
        const session = req.session;
        
        session.auth = true;
        session.user = user;

        return res.redirect('/contacts');
    } catch (err) {
        return res.render('login', { layout: false, message: err.message });
    }
}