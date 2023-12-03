const express = require('express');
const { projects } = require('./data.json');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

//Path
app.get('/', (req, res) => {
    res.render('index', { projects });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects/:id', (req, res, next) => {
    const project = projects.find(({ id }) => id === +req.params.id);
    if (project) {
        res.render('project', { project });
    } else {
        const err = new Error();
        err.status = 404;
        err.message = `The requested NOT exist.`;
        next(err);
    }
});

/*** 
* Error Handlers
***/

// 404-Not Found Error Handler
app.use((req, res, next) => {
    res.status(404).render('page-not-found');
});

// Global Error Handler 
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.render('page-not-found', { err });
    } else {
        const error = new Error();
        error.message = err.message || `Something went wrong!`;
        console.log(error.message);
        res.status(error.status || 500).render('error', { err: error });
    }
});


// Local Host
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("The application is running on localhost:3000....")
});

