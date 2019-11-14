const {userService, oauthService} = require('../../service');
const {tokenizer} = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const {email} = req.body;

        const isUserPresent = await userService.getUserByParams(email);

        if (!isUserPresent) {
            throw new Error('User is not found')
        }

        const tokens = tokenizer();

        await oauthService.insertTokenPair({
            user_id: isUserPresent.id,
            ...tokens
        });

        res.json(tokens)

    } catch (e) {
        console.log(e);
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }
};
