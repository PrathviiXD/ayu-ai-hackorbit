function sendMessage() {
  const inputBox = document.getElementById("userInput");
  const userInput = inputBox.value.trim();
  const chatlog = document.getElementById("chatlog");

  if (!userInput) return;

  appendMessage("You", userInput);

  // AI-like basic response logic
  let response = "Hmm... I need a bit more info to help you better.";

  const lower = userInput.toLowerCase();

  if (lower.includes("fever") || lower.includes("temperature")) {
    response = "It seems like you may have a fever. Please drink plenty of fluids and monitor your temperature. If it goes above 102°F, consider visiting a doctor.";
  } else if (lower.includes("headache")) {
    response = "Headaches can happen due to stress, dehydration, or screen time. Try resting, and stay hydrated.";
  } else if (lower.includes("cold") || lower.includes("cough")) {
    response = "You might be showing symptoms of a common cold. Warm fluids and rest usually help.";
  } else if (lower.includes("stomach") || lower.includes("pain")) {
    response = "Stomach pain can have many causes. Can you describe the type and duration of pain?";
  } else if (lower.includes("tired") || lower.includes("fatigue")) {
    response = "Feeling tired? It could be stress or lack of sleep. Try to get proper rest and avoid screens before sleeping.";
  }

  setTimeout(() => {
    appendMessage("AYU", response);
  }, 600); // Add a delay for realism

  inputBox.value = "";
}

function appendMessage(sender, text) {
  const chatlog = document.getElementById("chatlog");
  chatlog.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
  chatlog.scrollTop = chatlog.scrollHeight;
}

const recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
    const voiceInput = event.results[0][0].transcript;
    sendMessage(voiceInput);
};
recognition.start();
