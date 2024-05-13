const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Port is running at ${port}`));
app.use(express.json())

// app.use(function(req,res,next){
//     console.log('custom middleware')
//     next()
// })

app.use(function (req, res, next) {
    console.log('custom middleware2')
    next()
})

app.use(function (req, res, next) {
    console.log('custom middleware1')
    next()
})
const courses = [
    { id: 1, name: 'PYTHON' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'JAVA' }]

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.send('hello about')
})

app.get('/contact', (req, res) => {
    res.send('hello contact')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name)
    if (!course) res.status(404).send('Data not found')
    res.send(course)
})

// post
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

// put 
app.put('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name)
    if (!course) res.status(404).send('Data not found')
    course.name = req.body.name
    res.send(course)
})

// delete
// app.delete('/courses/:name', (req, res) => {
//     let updateCourse = courses.filter(course => course.name != req.params.name)
//     res.send(updateCourse)
// })

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) res.status(404).send('Data not found')
    const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(courses)
})
