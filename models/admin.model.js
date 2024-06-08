const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    userName: {
        type: String,
        require:true,
        default: "admin",
    },  

    userPassword: {
        type: String,
        require:true,
        default: "admin",
    },  
},{
    timestamps: true
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
