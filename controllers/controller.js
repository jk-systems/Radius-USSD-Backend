const md5 = require('md5')
const Users = require("../models/Users");
const User = require("../models/Users");

exports.getHome = (req, res) => {
    res.json({
        status:"200",
        msg : "Success!",
        about: {
            name: "wahudumu ussd backend engine",
            developer:"Joseph Mwadime",
            release: "v1.0.0"
        }
      })
  }
  exports.getUsers = async (req, res) => {
    const users = await Users.find();
    res.json(users)
    .catch( err =>{
        res.json({
            msg : err
        })
    })
  }
  
exports.authUser = async (req, res) => {
    const username = req.body.username;
    const passcode = req.body.passcode;

    Users.findOne({username}, (err, user) => {
        if(err){
            res.json(
               { msg: err}
            )
        }
        console.log(user);
        user.passcode === passcode ? res.json({ msg: "Success", payload: user}) : res.json({ Msg: "Fail"})
        })
    }

  exports.signUser = (req, res) => {
    console.log(req.body);
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        passcode: md5(req.body.passcode)
    });
    user.save()
    .then( data => {
        res.json(data);
    })
    .catch( err => {
        //console.log(err);
        res.json(err);
    })
  };
  