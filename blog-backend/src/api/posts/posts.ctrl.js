const {ObjectId} = require('mongoose').Types;
const Post = require('models/post');
const Joi = require('joi');

exports.checkObjectId = (ctx,next) => {
    const {id} = ctx.params;

    //검증 실패
    if(!ObjectId.isValid(id)){
        ctx.status = 400; //400 Bad Requeste
        return null;
    }
    return next();
};

exports.write=async(ctx) => {

    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    });

    const validation = schema.validate(ctx.request.body);
    
    if(validation.error){
        ctx.status = 400;
        ctx.body = validation.error;
        return;
    }

    const {title,body,tags} = ctx.request.body;
    const post = new Post({
        title,body,tags
    });

    try{
        await post.save();
        ctx.body=post;
    }catch(e){
        ctx.throw(e,500);
    }
};

exports.list= async(ctx) => {
    try{
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch(e){
        ctx.throw(e, 500)
    }
};

exports.read= async(ctx) => {
    const {id} = ctx.params;
    try{
        const post = await Post.findById(id).exec();

        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e){
        ctx.throw(e, 500);
    }
};

exports.remove= async(ctx) => {
    const {id} = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(e,500)
    }
};

exports.update= async(ctx) => {
    const {id} = ctx.params;
    try{
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();

        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    }
};