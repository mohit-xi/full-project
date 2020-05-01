const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports={
    uri: 'mongodb+srv://mohit:9287593031@cluster0-kb1qo.mongodb.net/test?retryWrites=true&w=majority',
    secret: crypto,
    db:'mean-stack',
}