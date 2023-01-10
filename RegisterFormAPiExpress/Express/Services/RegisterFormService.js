const RegisterUser = require('../models/registeruser');
console.log(RegisterUser);

module.exports.saveRegisterUser = async (req,res)=>{
    let registerUser = new RegisterUser(req.body.username,req.body.company,req.body.email,req.body.phone,req.body.subject);
    registerUser =await registerUser.save();
    res.send(registerUser);


}

module.exports.getRegisterUsers = async (req,res)=>{
    [users,_] = await RegisterUser.findAllRegisterUsers();
    res.status(200).json({users});

}

module.exports.updateRegisterUser = async (req,res)=>
{
    const id = req.params.id;
    console.log(req.body);
    let registerUser = new RegisterUser(req.body.username,req.body.company,req.body.email,req.body.phone,req.body.subject);
    registerUser = registerUser.update(id);
    res.send(registerUser);
}

module.exports.deleteRegisterUser = async (req,res)=>{
    console.log("inside the delete Users");
    const id = req.params.id;
    await RegisterUser.delete(id);
    res.status(200).json("deleted successfully");
    
}