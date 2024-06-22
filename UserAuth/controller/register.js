const db = {
    users: require('../data/user.json'),
    setusers : function (data){
        this.users = data;
    }
}

const fspromise = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const haddleuser = async(req , res)=>{
    const{user ,  pwd} = req.body;

    if(!user || !pwd){
       return res.status(400).json({'mesage' : 'require both field'});

    }

    const duplicate = db.users.find(p =>p.username===user);

    if(duplicate){
        return res.sendStatus(409);
    }

    try{
           const hashpwd = await bcrypt.hash(pwd , 10);

           const newuser = {
            'username' : user,
            'password' : hashpwd,

           }

           db.setusers([...db.users , newuser]);

           await fspromise.writeFile(
            path.join(__dirname ,'..','data','user.json' ) , JSON.stringify(db.users)
           )

           console.log(db.users);
           res.status(201).json({'message' : 'created'})


    }

    catch{
        res.status(500).json({'message' : error.mesage})
    }

    
}

module.exports = {haddleuser}