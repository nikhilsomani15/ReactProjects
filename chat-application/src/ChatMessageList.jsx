import React from "react";

const ChatMessageList = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-100 flex flex-col">
      {messages.map((m) => {
        const mine = m.sender === userName;
        return (
          <div
            key={m.id}
            className={`flex ${mine ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[78%] p-3 my-2 rounded-[18px] text-sm leading-5 shadow-sm ${
                mine
                  ? "bg-[#DCF8C6] text-[#303030] rounded-br-2xl"
                  : "bg-white text-[#303030] rounded-bl-2xl"
              }`}
            >
              <div className="break-words whitespace-pre-wrap">{m.text}</div>
              <div className="flex justify-between items-center mt-1 gap-16">
                <div className="text-[11px] font-bold">{m.sender}</div>
                <div className="text-[11px] text-gray-500 text-right">
                  {formatTime(m.ts)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessageList;
