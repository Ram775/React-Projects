import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const API_KEY = "AIzaSyDbfNktok9y3QfsIKxyloTPAy21gP5n6fU";

const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const creatChat = async (e) => {
    try {
      e.preventDefault();
      setChat((prev) => [
        ...prev,

        {
          sender: "me",
          message: message,
          createdAt: new Date(),
        },
      ]);
      const payload = {
        contents: {
          parts: {
            text: message,
          },
        },
      };
      const options = {
        headers: {
          "X-goog-api-key": API_KEY,
        },
      };
      const { data } = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        payload,
        options
      );
      const aiResult = data.candidates[0].content.parts[0].text;
      setChat((prev) => [
        ...prev,

        {
          sender: "ai",
          message: aiResult,
          createdAt: new Date(),
        },
      ]);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-9/12 mx-auto bg-white min-h-screen py-12">
        <h1 className="text-3xl font-bold text-center ">Gemini Chat Bot</h1>
        <div className="p-9">
          {chat.map((item, idx) => (
            <div key={idx}>
              {item.sender === "me" && (
                <div className="flex flex-col  justify-start">
                  <small className="text-gray-500 text-sm font-medium">
                    Typing....
                  </small>
                  <div className="bg-rose-200 px-6 py-3 rounded-xl w-fit font-medium">
                    {item.message}
                  </div>
                </div>
              )}

              {item.sender === "ai" && (
                <div className="flex flex-col items-end">
                  <small className="text-gray-500 text-left text-sm font-medium">
                    Typing....
                  </small>
                  <div className="bg-green-300 px-6 py-3 rounded-xl w-fit font-medium">
                   {item.message}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-indigo-600 p-8 fixed bottom-0 w-9/12">
          <form onSubmit={creatChat} className="flex gap-4">
            <input
              onChange={(e) => {
                setMessage(e.target.value.trim());
              }}
              type="text"
              placeholder="Enter your query..."
              required
              className="bg-white rounded-xl p-6 w-full"
            />
            <button className="flex  bg-white text-black rounded-2xl px-10 hover:bg-blue-400 duration-300 hover:scale-105 hover:text-white justify-center items-center gap-2">
              <ExternalLink /> Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
