function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");
  const userText = input.value.trim();

  if (userText === "") return;

  const userDiv = document.createElement("div");
  userDiv.textContent = "You: " + userText;
  messages.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.style.color = "#1e90ff";

  // Very basic AI response system
  if (userText.toLowerCase().includes("price")) {
    botDiv.textContent = "Bot: Simple websites start from $10. Advanced AI websites are $5000.";
  } else if (userText.toLowerCase().includes("time")) {
    botDiv.textContent = "Bot: Delivery is guaranteed within 24 hours.";
  } else if (userText.toLowerCase().includes("hosting")) {
    botDiv.textContent = "Bot: All sites include free lifetime hosting via GitHub.";
  } else if (userText.toLowerCase().includes("contact")) {
    botDiv.textContent = "Bot: Contact us at abussprotocolwdev@gmail.com.";
  } else {
    botDiv.textContent = "Bot: I’m here to help! Ask about price, hosting, delivery, or contact info.";
  }

  messages.appendChild(botDiv);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}