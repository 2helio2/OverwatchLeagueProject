const config = require('../Config/Config');
const express = require('express');

module.exports = class Start {
    constructor() {
        this.express = config.express;
        this.app = this.Conection();
        this.controllers = this.Controllers();
        this.startControllers();
    }

    Conection () {
        const port = this.express.port;
        this.app = express();
        this.app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        return this.app;
    }

    Controllers () {
        return [
            'NewsController'
        ]
    }

    startControllers() {
        this.controllers.forEach(controller =>{
            const newController = require(`../Controller/${controller}`);
            newController(this);
        });
    }

    createRoute(verb, path, middleware, handler) {
        this.app.use(path, middleware);
        this.app.get(path, (req, res) => {
            res.send(handler(req, res));
        });
    }
}