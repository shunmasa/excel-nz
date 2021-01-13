"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const index_1 = tslib_1.__importDefault(require("./config/index"));
// import Express from './config/express';
// const express = require('express')
// const next = require('next')
const cors = require('cors');
const apollo_server_1 = require("apollo-server");
// const dotenv = require("dotenv");
// const next = require('next')
const index_2 = tslib_1.__importDefault(require("./graphql/schema/index"));
const auth_1 = tslib_1.__importDefault(require("./middleware/auth"));
const express_1 = tslib_1.__importDefault(require("express"));
// dotenv.config({ path: "./config/config.env" });
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
    useFindAndModify: false,
    useCreateIndex: true,
});
const app = express_1.default();
/**
 * Throw error when not able to connect to database
 */
mongoose_1.default.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${index_1.default.db}`);
});
const server = new apollo_server_1.ApolloServer(index_2.default);
app.use(auth_1.default);
app.use('*', cors());
// const { PORT } = process.env;
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map