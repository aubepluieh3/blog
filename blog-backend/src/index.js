require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const api = require('./api');
const session = require('koa-session');

const {
    PORT: port =4000,
    MONGO_URI:mongoURL,
    COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL).then(()=>{
    console.log('connected to mongodb');
}).catch((e) => {
        console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

const sessionConfig={
    maxAge: 86400000,
};

app.use(session(sessionConfig, app));
app.keys = [signKey];

app.use(router.routes()).use(router.allowedMethods());



app.listen(port, () => {
    console.log('listening to port',port);
});