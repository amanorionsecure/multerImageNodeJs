const express = require('express')
const routes = require('./src/routes/routes');
// const travelCheckList = require('./src/routes/travelCheckListRoute')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 app.use('/app', routes);
// app.use('/app/travelCheckList', travelCheckList);

// app.get('/users', async (req, res) => {
//     console.log("hlw this is ");
//     try {
//         const result = await sequelize.query('SELECT * FROM gen_answers');
//         console.log("this is ", result);
//         res.status(200).json(result);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error retrieving users from database');
//     }
// });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});