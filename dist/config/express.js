"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
// import cors from 'cors';
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const http = tslib_1.__importStar(require("http"));
const index_1 = tslib_1.__importDefault(require("../graphql/schema/index"));
const auth_1 = tslib_1.__importDefault(require("../middleware/auth"));
const next = require('next');
// import config from './index';
const cors = require('cors');
// const allowedOrigins =  ['http://localhost:3000','https://excelnz.herokuapp.com/','http://localhost:4020']
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
class Express {
    constructor() {
        this.server = new apollo_server_express_1.ApolloServer(index_1.default);
        this.init = () => {
            this.express = express_1.default();
            this.express.use('*', cors());
            /**
             *  Middlerware for extracting authToken
             */
            // {
            //   origin(origin, callback) {
            //     /**
            //      * Allow requests with no origin
            //      * Like mobile apps or curl requests
            //      */
            //     if (!origin) { return callback(null, true); }
            //     if (config.allowedOrigins.indexOf(origin) === -1) {
            //       const msg = `The CORS policy for this site does not
            //       allow access from the specified Origin.`;
            //       return callback(new Error(msg), false);
            //     }
            //     return callback(null, true);
            //   }
            // }
            app.prepare()
                .then(() => {
                this.express.all("*", handle);
                // this.express.get('/card/:studentDialog', (req, res) => {
                //   return app.render(req, res, '/card', { studentDialog: req.params.id })
                // })
                // this.express.get('/dashboard/:dashboard', (req, res) => {
                //   return app.render(req, res, '/dashboard', { dashboard: req.params.id })
                // })
                // this.express.get('*', (req, res) => {
                //   if (req.url === '/') {
                //     res.writeHead(200, {
                //       Connection: 'keep-alive',
                //       'Cache-Control': 'no-cache',
                //       'Content-Type': 'text/plain'
                //       // 'Content-Type': 'text/event-stream',
                //     });
                //     res.write('data: Processing...\n\n');
                //     setTimeout(() => {
                //       res.write('data: Processing2...\n\n');
                //     }, 10000);
                //   } else {
                //     return handle(req, res)
                //   }
                // });
            });
            this.express.use(auth_1.default);
            this.express.use(body_parser_1.default.json());
            // this.express.use(bodyParser.urlencoded({extended:true}))
            this.server.applyMiddleware({ cors: false, path: '/graphql', app: this.express });
            this.httpServer = http.createServer(this.express);
            /**
             * Installing subscription handlers
             */
            this.server.installSubscriptionHandlers(this.httpServer);
        };
    }
}
exports.default = Express;
//# sourceMappingURL=express.js.map