"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    db: 'mongodb+srv://admin:C36143614cc@cluster0-0prmo.mongodb.net/projectX?retryWrites=true&w=majority',
    jwtSecret: 'somesuperkey',
    port: 4020,
    allowedOrigins: ['http://localhost:3000', 'http://localhost:4020']
};
// allowedOrigins: ['http://localhost:3000', 'http://yourapp.com', 'http://localhost:4020']
//# sourceMappingURL=index.js.map