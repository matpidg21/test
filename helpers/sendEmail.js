const mailer = require('nodemailer');
const {MAIL_CREDENTIAL} = require('../constant');


module.exports = async (email) => {

    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: MAIL_CREDENTIAL.EMAIL,
            pass: MAIL_CREDENTIAL.PASSWORD
        }
    });

    const info = await transport.sendMail({
        from: MAIL_CREDENTIAL.EMAIL,
        to: email,
        subject: 'bla bla'
    });
    return info.res
};
