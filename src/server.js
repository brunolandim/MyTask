const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => console.log('server running on port 3001'));
