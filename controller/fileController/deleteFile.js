const AWS = require('aws-sdk');
const {AWS_SECRET} = require('../../constant');

const BUCKET_NAME = 'photo-test-bucket';
const IAM_USER_KEY = AWS_SECRET.iamUser;
const IAM_USER_SECRET = AWS_SECRET.iamSecret;

module.exports = async (req, res) => {
    AWS.config.update({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,

    });
    const s3 = new AWS.S3();
    const params = {
        Bucket: BUCKET_NAME,
        Key: '9999.png'
    };
    // s3.deleteObject(params, function(err, data) {
    //     if (err) console.log(err, err.stack); // видаляє фотку не перевіряючи чи вона існує
    //     else     console.log(data);
    // });
    try {
        await s3.headObject(params).promise();// перевіряє чи фото існує
        console.log("File Found in S3");
        try {
            await s3.deleteObject(params).promise();//видаляє
            console.log("file deleted Successfully")
        } catch (err) {
            console.log("ERROR in file Deleting : " + JSON.stringify(err))
        }
    } catch (err) {
        console.log("File not Found ERROR : " + err.code)
    }
    res.send('delete photo')
};
