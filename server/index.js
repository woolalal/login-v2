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
                name: req.body.firstName,
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
            name: user.firstName,
            email: user.email
        }, 'secret123')

        return res.json({ status: 'ok', user: token })
    }
    else return res.json({ status: 'error, user does not exist', user: false })
})

app.listen(3001, () => {
    console.log('server running');
})