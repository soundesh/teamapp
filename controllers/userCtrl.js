
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql=require('mysql2')
const db=mysql.createPool({
    host :'localhost',
    user:'root',
    password:'monkatwork',
    database:'ipldb',
})

const userCtrl = {
    register: async (req, res) =>{
        try {
            const {name, email, password} = req.body;
            const signup="INSERT INTO Users(username,email,password) VALUES (?,?,?)";
             db.query(signup,[name,email,password],(err,result)=>{
                if(err){
                    return res.json({msg: err.message})
                    }

         res.json({msg:"registered successfully"})
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
      
        }
    },

    
    login: async (req, res) =>{
        try {
            const {email, password} = req.body;
            const loginer='SELECT * FROM Users WHERE email = ? AND password = ?'
            db.query(loginer, [email, password], function(err, user, fields) {
                if(err){
                    return res.json({msg: err.message})
                    }
                const accesstoken = createAccessToken({id:user[0].id})
                const refreshtoken = createRefreshToken({id:user[0].id})
                 res.cookie('refreshtoken', refreshtoken, {
                   httpOnly: true,
                    path: '/user/refresh_token',
                    maxAge: 7*24*60*60*1000 
                })
                res.json({accesstoken})
                })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    getUser: async (req, res) =>{
        try {

            const finduser='SELECT * FROM Users WHERE id=?'
           
            db.query(finduser,[req.user.id],(err,user)=>{
               if(err){
                   return res.json({msg: err.message})
                   }
            res.json(user[0]) 
           })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

 }


const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl

