import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/index';
import Express from './config/express';
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const next = require('next')


/**
 * Promisify All The Mongoose
 * @param mongoose
 */
Promise.promisifyAll(mongoose);

/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */


mongoose.connect(config.db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});



mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});


const ExpressServer = new Express();
ExpressServer.init();

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => { 
   ExpressServer.express.get('*', (req, res) => handle(req, res));
 
})

ExpressServer.server.applyMiddleware({ app: ExpressServer.express });

const { PORT } = process.env;

  
  ExpressServer.httpServer.listen( 4020 || PORT , () => {
    console.log(`🚀  Server ready at ${ PORT }`);
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${ExpressServer.server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${ExpressServer.server.subscriptionsPath}`
    );
  });
 


