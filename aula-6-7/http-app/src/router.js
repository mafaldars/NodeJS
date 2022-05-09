const { parse } = require('url');
const indexAction = require('./actions/index');
const aboutAction = require('./actions/about');
const contactsAction = require('./actions/contacts');

const routes = new Map();
routes.set('/', indexAction);
routes.set('/about', aboutAction);
routes.set('/contacts', contactsAction);

const router = async (request, response) => {
    const parsedUrl = parse(request.url, true);
    const route = parsedUrl.pathname;
    
    if (!routes.has(route)) {
        throw new Error('404 Not Found');
    }

    console.log('[info]', route);

    const action = routes.get(route);
    return await action(request, response, parsedUrl.query);
};

module.exports = router;