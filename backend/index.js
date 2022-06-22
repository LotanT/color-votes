const express = require('express');

const app = express();
app.use(express.json())

const port = process.env.PORT || 3030;

const colorVotesRoutes = require('./api/colorVotes/colorVotes.routes')

app.use('/api/colorvotes', colorVotesRoutes);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
  });