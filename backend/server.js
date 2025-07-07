require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/campuscore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Faculty'], required: true },
});
const User = mongoose.model('User', userSchema);


app.post('/api/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, role });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

  res.json({ email: user.email, role: user.role });
});


app.post('/api/register', async (req, res) => {
  const { email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hash, role });
    res.json({ email: user.email, role: user.role });
  } catch (e) {
    res.status(400).json({ message: 'User already exists' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));