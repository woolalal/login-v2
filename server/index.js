const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken')

app.use(express.json());
app.use(cors());

const UserModel = require('./models/Users');

mongoose.connect('mongodb+srv://root:root@cluster0.rngnn.mongodb.net/notes?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.post("/api/register", async (req, res) => {
    // console.log(req.body)
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })

    user.save((err) => {
        if (err) res.json({ status: 'error', error: err})
        else {
            const token = jwt.sign({
                userid: user._id,
                name: req.body.firstName,
                lname: req.body.lastName,
                email: req.body.email
            }, 'secret123')
            res.status(200).json({status: 'ok', token: token})
        }
    })
})

app.post("/api/login", async (req, res) => {
    const user = await UserModel.findOne({
        email: req.body.email,
    })
    if(!user) return res.json({ status: 'error, user does not exist', user: false })

    const verifyPassword = await bcrypt.compare(req.body.password, user.password);
    if(verifyPassword) {
        const token = jwt.sign({
            userid: user._id,
            name: user.firstName,
            lname: user.lastName,
            email: user.email
        }, 'secret123')

        return res.json({ status: 'ok', user: token })
    }
    else return res.json({ status: 'error, user does not exist', user: false })
})

app.put("/api/updateprofile", async (req, res) => {
    const id = req.body.id;
    const newFirstName = req.body.firstName
    const newLastName = req.body.lastName
    const newEmail = req.body.email

    UserModel.findByIdAndUpdate({_id: id}, {
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail
    }, {new: true}, (err, data) => {
        if (err) return res.status(404).json({ status: 'error, update not successful, try again!'})
        else {
            const token = jwt.sign({
                userid: data._id,
                name: data.firstName,
                lname: data.lastName,
                email: data.email
            }, 'secret123')
            return res.json({ status: 'ok', user: token })
        }
    })
})

app.put("/api/changepassword", async (req, res) => {
    const id = req.body.id;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const user = await UserModel.findOne({
        email: req.body.email,
    })

    const verifyPassword = await bcrypt.compare(oldPassword, user.password);
    if(!verifyPassword){
        return res.status(404).json({ status: 'Error, the old password keyed is wrong!' })
    } else {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        UserModel.findByIdAndUpdate({_id: id}, {
            password: hashedPassword
        }, {new: true}, (err, data) => {
            if (err) return res.status(404).json({ status: 'Error, update not successful, try again!'})
            else {
                const token = jwt.sign({
                    userid: data._id,
                    name: data.firstName,
                    lname: data.lastName,
                    email: data.email
                }, 'secret123')
                return res.json({ status: 'ok', user: token })
            }
        })
    }
})

app.listen(3001, () => {
    console.log('server running');
})