const allowedEndpoints = [
    '/auth/login',
    '/auth/login?message=Forbidden',
    '/auth/register',
];

const verifyAuth = async (req, res, next) => {
    const { session, url } = req;

    if (url.includes('/api')) {
        return next();
    }

    if (!allowedEndpoints.includes(url) && !session.auth) {
        return res.status(403).redirect('/auth/login?message=Forbidden');
    }

    res.locals.user = session.user;

    return next();
}

module.exports = { verifyAuth };