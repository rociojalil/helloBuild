const express = require('express');
const app = express();
const PORT = 3001;
const morgan = require('morgan');

const githubRoutes = require("./src/routes/user")



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(express.json());
app.use(morgan('tiny'));

app.use('/users', githubRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
