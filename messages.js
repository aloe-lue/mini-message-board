// mock messages db
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = async function messagesGetter() {
  const data = messages.slice();
  return data;
};

const setMessage = async function messageSetter(obj) {
  const { messageText, authorName } = obj;
  messages.push({ text: messageText, user: authorName, added: new Date() });
};

module.exports = { getMessages, setMessage };
