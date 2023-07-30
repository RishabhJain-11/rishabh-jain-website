require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;

const projectRoutes = require();
const certificationRoutes = require();
const articleRoutes = require();
const linkRoutes = require();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/projects', projectRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/links', linkRoutes);


mongoose.connect("mongodb://0.0.0.0:27017/portfolio")
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to port ${port}`)
        })
    })
    .catch((e) => {
        console.log(e.message);
    })