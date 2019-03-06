const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
    commentId: {
        type: String,
        required:true
    },
    articleId: {
        type: String,
        required: true
    },
    userId:{
        type:String,
        required: true
    },
    //评论的用户
    user: {  
        userId:{type:String},
        userName: {
            type: String
        },
        type:{type:Number, default:1}, // 0作者|| 1用户,
        avatar:{type:String, default:'user'}
    },
    content: {
            type: String,
            required: true,
            validate: /\S+/
        },
    created_time: {
        type: Date,
        default: Date.now
    },
    //子评论
    sub_comment:[{
       user: {
           userId: {type: String },
           userName: {type: String},
           type: {type: Number, default: 1}, // 0作者|| 1用户,
           avatar: {type: String,default: 'user'}
       },
       toUser: {
           userId: {
               type: String
           },
           userName: {
               type: String,
               default: ""
           },
           type: {
               type: Number,
               default: 1
           }, // 0作者|| 1用户,
           avatar: {
               type: String,
               default: 'user'
           }
       },
        content: {
               type: String,
               required:true,
               validate: /\S+/
           },
        created_time: {
            type: Date,
            default: Date.now
        },

    }]
  
})

module.exports = mongoose.model('Comment', commentsSchema)



// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const commentsSchema = new Schema({
//     articleId: {
//         type: String,
//         required: true
//     },
//     userId: {
//         type: String,
//         // required: true
//     },
//     to_userId: {
//         type: String,
//         // required: true
//     },
//      content: {
//          type: String,
//         //  required: true,
//          validate: /\S+/
//      },
//     comments:[
//          {
//             user: {
//                 type: Object,
//             },
//             content: {
//                 type: String,
//                 required: true,
//                 validate: /\S+/
//             },
//             created_time: {
//                 type: Date,
//                 default: Date.now
//             },
//             //子评论
//             sub_comment: [{
//                 user: {
//                     type: Object,
//                 },
//                 to_user: {
//                     type: Object,
//                     },
//                 content: {
//                     type: String,
//                     required: true,
//                     validate: /\S+/
//                 },
//                 created_time: {
//                     type: Date,
//                     default: Date.now
//                 },
//             }],
//         }
//     ],
// })

module.exports = mongoose.model('Comment', commentsSchema)