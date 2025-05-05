import { FiMessageSquare } from "react-icons/fi";
import React from "react";

const MessageWidget = () => {
  return (
    <a
      href="https://wa.me/2348123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-tertiary transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <FiMessageSquare className="w-6 md:w-7 h-6 md:h-7" />
    </a>
  );
};

export default MessageWidget;
