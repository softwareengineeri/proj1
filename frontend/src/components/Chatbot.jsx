/*import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: "Explain things like you're interacting with a Common Man.",
};
<h1 className="text-center mb-4" style={{ color: 'white' }}>CHATBOT</h1>
function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Chatbot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatBOT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';
    setRecognition(recognitionInstance);
  }, []);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatBOT(newMessages);
  };

  const handleVoiceRecognition = () => {
    if (recognition) {
      recognition.start();
      setIsTyping(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleSend(transcript);
        recognition.stop();
      };
    } else {
      console.log("Speech recognition not available");
    }
  };

  async function processMessageToChatBOT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatBOT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatBOT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="App" style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "700px",
          marginLeft: "200px",
          display: "inline-block",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList
              style={{ backgroundColor: 'black' }}
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="ChatBot is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              style={{ backgroundColor: 'black' }}
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
      <div style={{ marginLeft: "20px", marginTop: "50px" }}>
        <button onClick={handleVoiceRecognition}><i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-sharp fa-solid fa-microphone"></i></button>
        <pre>
          Ask any legal question, and the chatbot will answer according to Indian laws!
        </pre>
      </div>
    </div>
  );
}

export default Chatbot;*/
import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: "Explain things like you're interacting with a Common Man.",
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Chatbot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatBOT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';
    setRecognition(recognitionInstance);
  }, []);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatBOT(newMessages);
  };

  const handleVoiceRecognition = () => {
    if (recognition) {
      recognition.start();
      setIsTyping(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleSend(transcript);
        recognition.stop();
      };
    } else {
      console.log("Speech recognition not available");
    }
  };

  async function processMessageToChatBOT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatBOT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatBOT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="text-center mb-4" style={{ color: 'black',textDecoration:'underline' }}>CHATBOT</h1>
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "700px",
        }}
      >
        <br></br>
        <br></br>
        <MainContainer>
          <ChatContainer>
            <MessageList
              style={{ backgroundColor: 'black' }}
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="ChatBot is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              style={{ backgroundColor: 'black' }}
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
      <div style={{ marginTop: "50px" }}>
        <button onClick={handleVoiceRecognition}><i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-sharp fa-solid fa-microphone"></i></button>
        <pre>
          Ask any legal question, and the chatbot will answer according to Indian laws!
        </pre>
      </div>
    </div>
  );
}

export default Chatbot;