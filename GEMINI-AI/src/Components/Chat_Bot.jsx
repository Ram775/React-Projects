import axios from "axios";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Chat_Bot = () => {
  const URL = import.meta.env.VITE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [message, setMessage] = useState([]);
  const [chats, setChats] = useState([]);

  const createChat = async (e) => {
    try {
      e.preventDefault();

      setChats((prev) => [
        ...prev,
        {
          sender: "me",
          message: message,
          createdAt: new Date(),
        },
      ]);

      const payload = {
        model: "openai/gpt-5.2",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        reasoning: {
          enabled: true,
        },
      };

      const options = {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(URL, payload, options);
      console.log(data);
      

      setChats((prev) => [
        ...prev,
        {
          sender: "ai",
          message: aiResult,
          createdAt: new Date(),
        },
      ]);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="bg-white mx-auto min-h-screen w-9/12">
        <h1 className="text-center font- text-2xl font-semibold  py-12">
          🌍Gemini-AI
        </h1>

        <div className="p-8 ">
          {chats.map((item, index) => (
            <div key={index}>
              {item.sender === "me" && (
                <div className="flex flex-col gap-2 items-end animate__animated animate__bounce">
                  <small className="text-gray-500 animate__animated animate__fadeIn">
                    Typing....
                  </small>
                  <div className="bg-rose-200 rounded w-fit font-medium px-4 py-2">
                    {item.message}
                  </div>
                </div>
              )}

              {item.sender === "ai" && (
                <div className="flex flex-col gap-2 items-start animate__animated animate__fadeIn">
                  <small className="text-gray-500 animate__animated animate__fadeIn">
                    Typing....
                  </small>
                  <div className="bg-green-300 rounded w-fit font-medium px-4 py-2">
                    {item.message}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-600 bottom-0 p-5 fixed w-9/12">
          <form className="flex gap-5" onSubmit={createChat}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white outline-0 rounded-xl w-full p-6"
              type="text"
              placeholder="Write your msg....."
              required
            />
            <button className="bg-yellow-300 text-xl cursor-pointer rounded-xl flex flex-col items-center justify-center px-12 hover:bg-green-500 transition-transform duration-500 hover:scale-105">
              <FaExternalLinkAlt />
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Chat_Bot;
