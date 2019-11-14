const db = require('../dataBase').getInstance();
const sendEmail = require('../helpers/sendEmail');
const {DB_TABLES} = require('../constant');
const {orderController} = require('../controller');

const cron = require('cron');
const moment = require('moment');

const format = 'DD.MM.YYYY HH:mm:ss';

const cronJob = cron.job("*/1 */10 */1000 * * *", async function () {
    const OrderModel = db.getModel(DB_TABLES.ORDER);

    const allOrder = await OrderModel.findAll({
        where: {
            status: 'expectation'
        },
        attributes: ['create_at', 'user_id', 'recipient_email']
    });

    let nowData = moment();
    for (let i = 0; i < allOrder.length; i++) {
        let {create_at, user_id, recipient_email} = allOrder[i];

        let data = moment(create_at);
        let duration = moment.duration(nowData.diff(data));

        let day = duration.asDays();
        console.log(day);

        if (day >= 3 && day < 6) {
            // await sendEmail(recipient_email)
        }

        if (day >= 6 && day < 7) {
            // await sendEmail(recipient_email)
        }

        if (day >= 7) {
            await orderController.deleteOrder(user_id);
        }
    }
});
cronJob.start();
