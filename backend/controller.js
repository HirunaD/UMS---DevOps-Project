const { response } = require('./app');
const User = require('./model');

//create controller function to get users
const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({message: error})
        });
};

const addUser = (req, res, next) => {
    const {id, name, nic, email, dob, gender, city, role} = req.body;
    const user = new User({
        id: id,
        name: name,
        nic: nic,
        email: email,
        dob: dob,
        gender: gender,
        city: city, 
        role: role
    });
    user.save() 
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
};

const updateUser = (req, res, next) => {
    const {id, name, nic, email, dob, gender, city, role} = req.body;
    User.updateOne({id: id}, {$set: {name: name, nic: nic, email:email, dob: dob, gender: gender, city: city, role: role}})
        .then(response => {
            res.json({response})
        })   
        .catch(error => {
            res.json({error})
        });
};

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({id: id})
        .then(response => {
            res.json({response})
        })   
        .catch(error => {
            res.json({error})
        });
};

//exports the controller functions
exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
