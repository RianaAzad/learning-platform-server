const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

const allCourses = require('./data/courses.json');

app.get('/', (req, res)=>{
    res.send('API RUNNING');
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    if(id==4){
        res.send(allCourses);
    }
    else{
        const selectedCourses = allCourses.filter(course => course.category_id == id)
    res.send(selectedCourses);
    }
    
})

app.get('/course-details/:id', (req, res)=>{
    const id = req.params.id;
    const courseSelected = allCourses.find(course => course.id == id)
    res.send(courseSelected);
})

app.listen(port, () => {
    console.log('api running on port', port);
})