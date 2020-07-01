"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.UploadScalar = new graphql_1.GraphQLScalarType({
    name: 'Upload',
    description: 'The `Upload` scalar type represents a file upload.',
    parseValue(value) {
        return value;
    },
    serialize(value) {
        return value;
    },
    parseLiteral(ast) {
        throw new Error('‘Upload’ scalar literal unsupported.');
    },
});
//# sourceMappingURL=uploadSclar.js.map