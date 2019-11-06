// const {productService,authService}  = require('../../service');
//
//
// module.exports = async (req, res, next) =>{
//     // const token = req.get('Authorization');
//     //
//     // const userFromAccessToken = await authService.getUserFromTokenByParams(token);
//     const {user_id} = req.user;
//
//     // if (!userFromAccessToken) {
//     //     return next(new Error('No user'))
//     // }
//     const productFromUser = await productService.getProductFromUser(user_id);
//
//     console.log(productFromUser +'111');
//
//     req.user = productFromUser;
//
//     next()
// };
