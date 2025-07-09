// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health prediction route (dummy logic)
app.post('/predict', (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let reply = "🤖 I'm here to help, please tell me more about your symptoms.";
  if (text.includes("fever")) reply = "🩺 You might have viral fever. Stay hydrated.";
  else if (text.includes("headache")) reply = "💊 Try resting and avoid screen time.";
  else if (text.includes("cough") || text.includes("cold")) reply = "🤧 Looks like a cold. Warm fluids might help.";
  else if (text.includes("stomach")) reply = "🥴 Sounds like a stomach issue. Avoid spicy food & rest.";

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`AYU.AI backend running on port ${PORT}`));


// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Symptom checker route
app.post('/predict', (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let reply = "🤖 I'm here to help, please tell me more about your symptoms.";

  if (text.includes("fever")) reply = "🩺 You might have viral fever. Stay hydrated, and take rest.";
  else if (text.includes("headache")) reply = "💊 It could be stress or dehydration. Try resting in a dark room.";
  else if (text.includes("cough") || text.includes("cold")) reply = "🤧 Looks like a cold. Warm fluids and rest may help.";
  else if (text.includes("stomach")) reply = "🥴 Sounds like a stomach issue. Avoid spicy food and drink water.";
  else if (text.includes("dizzy") || text.includes("weak")) reply = "🫥 You may be low on energy. Have ORS or a banana and rest.";
  else if (text.includes("throat")) reply = "😵‍💫 Try warm salt water gargles. It may help sore throat.";
  else if (text.includes("vomit") || text.includes("nausea")) reply = "🤢 Rest, drink fluids, and avoid outside food.";
  else if (text.includes("anxiety") || text.includes("stress")) reply = "🧘‍♀️ Close your eyes, take deep breaths, and relax for 5 mins.";
  else if (text.includes("tired") || text.includes("exhausted")) reply = "😴 You may need sleep or mental rest. Take a nap if possible.";

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`AYU.AI backend running on port ${PORT}`));
