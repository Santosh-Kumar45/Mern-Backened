const mongoose = require('mongoose');
const chat = require('./models/chat.js');


main().then(() => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


let allChats=[
    {
        from:"santosh",
        to:"uday",
        msg:"send me notes of the exam",
        created_at: new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"teach me js callback",
        created_at:new Date(),
    },
    {
        from:"santu",
        to:"rupa",
        msg:"teach me js fundamental",
        created_at:new Date(),
    },
    {
        from:"mukesh",
        to:"santosh",
        msg:"teach me about java",
        created_at:new Date(),
    },

]

chat.insertMany(allChats);