const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const chatClear = document.getElementById('chatClear');

function addChatMessage(text, sender) {
  const message = document.createElement('p');
  message.className = `chat-message chat-message-${sender}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (chatForm && chatInput && chatMessages) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userMessage = chatInput.value.trim();

    if (!userMessage) {
      chatInput.focus();
      return;
    }

    addChatMessage(userMessage, 'user');
    chatInput.value = '';
    chatInput.focus();

    window.setTimeout(() => {
      addChatMessage('Howdy', 'bot');
    }, 2000);
  });
}

if (chatClear && chatInput && chatMessages) {
  chatClear.addEventListener('click', () => {
    chatMessages.innerHTML = '';
    chatInput.focus();
  });
}
