const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


const list = ['https://www.google.com']
const corsOption = {
    origin: (origin , callback)=>{
        if(list.indexOf(origin)!== - 1 || !origin){
            callback(null , true)
        }

        else{
            callback(new Error('not allowed'));
        }
    },

    optionSuccessStatus : 200
}
app.use(cors(corsOption));


app.use('/register' , require('./routes/api/register'));
app.use('/auth' , require('./routes/api/auth'));


app.listen(3000 , ()=>{
    console.log("server running ...")
});


