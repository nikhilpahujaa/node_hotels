require('dotenv').config();

const express = require('express');
const app = express();
const db = require('./db');



const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',(req, res)=> {
    res.send("welcome to our Hotel")
})


const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes')

app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes)


const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// app.listen(3000, ()=> {
//     console.log('server is running on port 3000')
// });