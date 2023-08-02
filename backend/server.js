const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000; // Default to port 4000 if PORT environment variable is not set in .env

dotenv.config()
const projectRoutes = require('./routes/projects');
const certificationRoutes = require('./routes/certifications');
const articleRoutes = require('./routes/articles');
const linkRoutes = require('./routes/links');

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/projects', projectRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/links', linkRoutes);

const uri = process.env.MONGODB_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to port ${port}`)
        })
    })
    .catch((e) => {
        console.log(e.message);
    })

