module.exports = async (req, res) => res.render('login', {
    layout: false,
    message: req.query.message ?? undefined
});