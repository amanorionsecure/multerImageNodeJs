const express = require('express')
const routes = require('./src/routes');
const app = express()
const { client } = require('./src/config/pgConnection')

app.use('/app', routes);

client.connect();

app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM gen_answers');
        res.send(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving users from database');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

process.on('SIGINT', () => {
    client.end();
    process.exit();
});