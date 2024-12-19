import { useState } from "react";

const NewPost = ({ onAddPost }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onAddPost({ id: Date.now(), user: "Guest", message });
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="Tulis pesan Anda..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Kirim
      </button>
    </form>
  );
};

export default NewPost;
