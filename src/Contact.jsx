import { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      username,
      email,
      message,
    };
    console.log(contactData);
  };

  return (
    <div className=" min-h-screen bg-gray-700 text-white flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="mb-4 font-bold text-2xl">Contact Us</h1>

        <form
          className="flex flex-col w-60 bg-gray-900 border-2 border-gray-500 rounded-md p-4"
          onSubmit={handleFormSubmit}
        >
          <label className="mb-2">Name</label>
          <input
            className="bg-gray-500 text-white mb-4 rounded-md outline-2 outline-green-500"
            type="text"
            name="name"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="mb-2">Email</label>
          <input
            className="bg-gray-500 rounded-md outline-2 outline-green-500 mb-4 "
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="mb-2">How we can help?</label>
          <textarea
            className="bg-gray-500 rounded-md outline-2 outline-green-500 pb-6"
            type="text"
            placeholder="type your message here"
            name="help"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="bg-white text-black font-bold mt-4 rounded-md "
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
