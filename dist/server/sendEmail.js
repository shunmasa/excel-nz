"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nodemailer = require("nodemailer");
const sendEmail = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            type: "OAuth2",
            user: process.env.SMTP_EMAIL,
            // accessToken: 'ya29.Il-8B9BBaNPZzbeVWOHmM44S9Nvl09Frvnm4kHhAije76giL_T_jS786DnuBFGJ0wHdnL9Tc8oYv3lEdS8evAODZbp38ePlzbfxojWOoKemG2hgh3xNKY0Q88x3S2cqbaw',
            refreshToken: process.env.SMTP_REFRESH_TOKEN,
            clientId: process.env.SMTP_CLIENT_ID,
            clientSecret: process.env.SMTP_CLIENT_SECRET,
        }
    }, {
        from: `Mailer Test <${process.env.FROM_EMAIL}>`
    });
    transporter.verify((error, success) => {
        error ? console.log(error) : console.log('Server is ready to take our messages', success);
    });
    //send mail with defined transport object
    const message = {
        from: `${process.env.FROM_NAME}<${process.env.FROM_EMAIL}>`,
        to: 'antonilli010590@gmail.com',
        subject: 'Test',
        text: 'Test text'
    };
    // const mailer = message => {
    transporter.sendMail(message, (error, info) => {
        if (error)
            return console.log(error);
        console.log('Email sent', info);
        transporter.on('token', token => {
            console.log('A new access token was generated');
            console.log('User: %s', token.user);
            console.log('Access Token: %s', token.accessToken);
            console.log('Expires: %s', new Date(token.expires));
        });
    });
    // }
    // const info = await transporter.sendMail(message);
    // console.log("Message sent: %s", info.messageId);
});
module.exports = sendEmail;
//# sourceMappingURL=sendEmail.js.map