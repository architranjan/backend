const db = {
    users: require('../data/user.json'),
    setusers : function (data){
        this.users = data;
    }
}

const path = require('path');
const bcrypt = require('bcrypt');

const haddleauth = async(req , res)=>{
    const{user , pwd} = req.body;

    if(!user || !pwd){
        return res.status(400).json({'mesage' : 'require both field'});
 
     }

     const found = db.users.find(p=>p.username === user);

     if(!found){
       return res.sendStatus(401);
     }

     const match = await bcrypt.compare(pwd ,found.password);

     if(match){
        res.json({'messgae' : 'login succesfull'});
     }

     else{
        res.sendStatus(401);
     }





}

module.exports = {haddleauth}