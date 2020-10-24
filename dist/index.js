"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const index_1 = tslib_1.__importDefault(require("./config/index"));
const express_1 = tslib_1.__importDefault(require("./config/express"));
const express = require('express');
const next = require('next');
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
// const path = require('path')
//const path = require("path");
////const sendEmail = require('./server/sendEmail')
//const express = require("express");
// const app = express();
/**
 * Promisify All The Mongoose
 * @param mongoose
 */
bluebird_1.default.promisifyAll(mongoose_1.default);
/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */
mongoose_1.default.connect(index_1.default.db, {
    bufferMaxEntries: 0,
    keepAlive: true,
    reconnectInterval: 500,
    reconnectTries: 30,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
/**
 * Throw error when not able to connect to database
 */
mongoose_1.default.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${index_1.default.db}`);
});
// app.use(express.static('client/build'));
// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
/**
 * Initialize Express
 */
// sendEmail();
// app.post('/send', function (req, res) {
//   const name = req.body.name
//   console.log(name)
// })
const ExpressServer = new express_1.default();
ExpressServer.init();

//web
// const nextApp = next({
//   dev: process.env.NODE_ENV !== 'production',
//   dir: __dirname,
// });
//console.log(__dirname) 
// const handle = nextApp.getRequestHandler()
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev});
const handle = app.getRequestHandler();
app.prepare()
    .then(() => {
    const server = express();
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    ExpressServer.httpServer.listen(4020 || index_1.default.port, () => {
        console.log(`🚀  Server ready at ${index_1.default.port}`);
        console.log(`🚀 Server ready at localhost:${index_1.default.port}${ExpressServer.server.graphqlPath}`);
        console.log(`🚀 Subscriptions ready at ws://localhost:${index_1.default.port}${ExpressServer.server.subscriptionsPath}`);
    });
});
//# sourceMappingURL=index.js.map