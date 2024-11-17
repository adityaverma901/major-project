"use client"; // This marks the file as a client component

import { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';
import Navdash from '@/components/nav-dash'; // Import the Navdash component

// Define message type
interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isClient, setIsClient] = useState<boolean>(false); // To check if rendering on client

  // Set isClient to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return; // Ignore empty messages

    // Add user message to chat
    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://localhost:5000/get-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: data.response },
      ]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }

    setInput(""); // Clear input field after sending
  };

  if (!isClient) return null; // Return nothing on server render

  return (
    <div>
      {/* Navigation Dashboard */}
      <Navdash />

      {/* Header Section */}
      <header className="flex flex-grid top-4 w-full flex justify-between bg-green-950 items-center px-6 text-white">
        <span className="text-xs tracking-widest">
          YOUR SAFE SPACE TO TALK, ANYTIME, ANYWHERE
        </span>
        <nav className="flex space-x-4 text-sm">
          <a href="#support" className="hover:text-gray-900">24/7 SUPPORT</a>
          <a href="#about" className="hover:text-gray-900">ABOUT US</a>
          <a href="#profile" className="hover:text-gray-900">PROFILE</a>
        </nav>
      </header>

      {/* Chatbot Container */}
      <div className={styles.chatbotContainer}>
        {/* Title and Subtitle */}
        <div className={styles.chatbotTitle}>Inner Voice</div>
        <div className={styles.chatbotSubtitle}>Your Mental Health Companion</div>

        {/* Chat Window */}
        <div className={styles.chatWindow}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? styles.userMessage : styles.botMessage}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Container */}
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.inputField}
          />
          <button onClick={sendMessage} className={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
