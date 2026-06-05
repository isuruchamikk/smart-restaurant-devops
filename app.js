const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Smart Restaurant Management App Running');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;