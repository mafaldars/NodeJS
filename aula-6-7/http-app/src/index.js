const server = require('./server');
const { 2: port } = process.argv;

server.listen(port);
console.log('[info]', `Server listening on port ${port}: http://localhost:${port}`);