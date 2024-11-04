const express = require('express');
// Path and Mongoose requirements
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const methodOverride = require('method-override');

const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;

// Connect to MongoDB
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  console.log('Connection successful');
}

main().catch(err => console.log(err));

// Set EJS as the view engine and define views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Route to render chat messages
app.get('/chats', async (req, res) => {
  let chats = await Chat.find();
  res.render('chats', { chats });
});

// New route
app.get('/chats/new', async (req, res) => {
  res.render('new.ejs');
});

// Create route
app.post('/chats', async (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  await newChat.save();
  console.log('Chat was saved');
  res.redirect('/chats');
});

// Edit message route
app.get('/chats/:id/edit', async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render('edit.ejs', { chat });
});

// Update route
app.put('/chats/:id', async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect('/chats');
});

// Destroy route
app.delete('/chats/:id', async (req, res) => {
  let { id } = req.params;
  let chatToBeDeleted = await Chat.findByIdAndDelete(id);
  console.log(chatToBeDeleted);
  res.redirect('/chats');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
