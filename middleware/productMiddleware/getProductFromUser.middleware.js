const {productService,authService}  = require('../../service');


module.exports = async (req, res, next) =>{
    const token = req.get('Authorization');

    const userFromAccessToken = await authService.getUserFromTokenByParams(token);
    console.log('AAAAAAAAAAAAAAAAAAAAAA');
    console.log(userFromAccessToken);
    console.log('AAAAAAAAAAAAAAAAAAAAAA');

    if (!userFromAccessToken) {
        return next(new Error('No user'))
    }
    const productFromUser = await productService.getProductFromUser(userFromAccessToken);

    console.log(productFromUser +'111');

    req.user = productFromUser;

    next()
};
