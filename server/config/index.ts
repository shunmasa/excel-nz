import dotenv from 'dotenv';
dotenv.config();
export default {
   db: 'mongodb+srv://admin:C36143614cc@cluster0-0prmo.mongodb.net/projectX?retryWrites=true&w=majority',
   jwtSecret: 'somesuperkey',
   port: 4020,
   allowedOrigins: ['http://localhost:3000', 'http://localhost:4020','https://excelnz.herokuapp.com/','https://excelnz.herokuapp.com/heroku']
};
// allowedOrigins: ['http://localhost:3000', 'http://yourapp.com', 'http://localhost:4020']