
const jsonSrever = require('json-server');
const server = jsonSrever.create();
const router = jsonSrever.router('./db.json');
const middlewares = jsonSrever.defaults({
    static: './build',
});

const PORT = process.env.PORT || 5000;

server.use(middlewares);

server.use(router);

server.listen(PORT, () => {
    console.log('Server is runing');
});

