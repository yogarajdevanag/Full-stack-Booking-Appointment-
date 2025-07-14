const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
