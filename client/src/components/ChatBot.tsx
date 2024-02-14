// ChatbotComponent.js

import React from 'react';

const ChatbotComponent = () => {
  const embeddedChatbotConfig = {
    chatbotId: "BVTJmnpC9S-c_V7JlTxDV",
    domain: "www.chatbase.co"
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `
        window.embeddedChatbotConfig = {
          chatbotId: "${embeddedChatbotConfig.chatbotId}",
          domain: "${embeddedChatbotConfig.domain}"
        };
      ` }} defer />
      <script
        src="https://www.chatbase.co/embed.min.js"
        // domain="www.chatbase.co"
        defer
      ></script>
      {/* <iframe
        src="https://www.chatbase.co/chatbot-iframe/BVTJmnpC9S-c_V7JlTxDV"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
      ></iframe> */}
    </>
  );
};

export default ChatbotComponent;
