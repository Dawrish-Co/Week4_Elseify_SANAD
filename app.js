const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'SANAD Training Service',
        database: 'connected'
    });
});

app.listen(PORT, () => {
    console.log(`SANAD training server is running on port ${PORT}`);
});