const {orderService}= require('../../service');

const acceptedOder = async (req, res) =>{
    try {
        const {user_id} = req.user;
        await orderService.updateOrder({status:'accepted'}, user_id);
        res.send('accepted oder')

    }catch (e) {
        console.log(e);
    }
};

const rejectedOrder = async (req,res)=>{
    try {
        const {user_id} = req.user;
        await orderService.updateOrder({status:'rejected'},user_id);
        res.send('rejected oder')
    }catch (e) {
        console.log(e);
    }
};

module.exports = {
    acceptedOder,
    rejectedOrder
};
