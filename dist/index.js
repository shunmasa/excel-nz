"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const index_1 = tslib_1.__importDefault(require("./config/index"));
const express_1 = tslib_1.__importDefault(require("./config/express"));
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const next = require('next');
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
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
mongoose_1.default.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${index_1.default.db}`);
});
const ExpressServer = new express_1.default();
ExpressServer.init();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
    .then(() => {
    ExpressServer.express.get('*', (req, res) => handle(req, res));
});
ExpressServer.server.applyMiddleware({ app: ExpressServer.express, path: '/graphql', cors: false });
const { PORT } = process.env;
ExpressServer.httpServer.listen(4020 || PORT, () => {
    console.log(`🚀  Server ready at ${PORT}`);
    console.log(`🚀 Server ready at http://localhost:${PORT}${ExpressServer.server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${ExpressServer.server.subscriptionsPath}`);
});
//# sourceMappingURL=index.js.map