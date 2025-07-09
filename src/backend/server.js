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

