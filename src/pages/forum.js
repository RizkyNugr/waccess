import React, { useState } from 'react';
import NavBar from '../component/Navbar';
import Carosel from '../component/carousel';
import FeaturesSection from '../component/features';
import NewsSection from '../component/newsSection';
import Footer from '../component/Footer';

const Forum = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: 'Apa itu React?',
      description: 'Diskusi tentang dasar-dasar React, termasuk komponennya.',
      comments: [
        { id: 1, username: 'JohnDoe', content: 'React sangat powerful untuk membangun UI!' },
        { id: 2, username: 'JaneSmith', content: 'Saya belajar React dalam waktu singkat, sangat mudah!' },
      ],
    },
    {
      id: 2,
      title: 'Bagaimana cara menggunakan Hooks?',
      description: 'Diskusi tentang penggunaan Hooks di React.',
      comments: [
        { id: 1, username: 'Alice', content: 'Hooks mempermudah pengelolaan state dalam komponen fungsional!' },
      ],
    },
  ]);

  const [newTopic, setNewTopic] = useState({ title: '', description: '' });
  const [newComment, setNewComment] = useState({});

  const handleAddTopic = () => {
    if (newTopic.title.trim() && newTopic.description.trim()) {
      setTopics([
        ...topics,
        {
          id: topics.length + 1,
          title: newTopic.title,
          description: newTopic.description,
          comments: [],
        },
      ]);
      setNewTopic({ title: '', description: '' });
    }
  };

  const handleAddComment = (topicId) => {
    if (newComment[topicId]?.trim()) {
      setTopics(
        topics.map((topic) =>
          topic.id === topicId
            ? {
                ...topic,
                comments: [
                  ...topic.comments,
                  { id: topic.comments.length + 1, username: 'User' + (topic.comments.length + 1), content: newComment[topicId] },
                ],
              }
            : topic
        )
      );
      setNewComment({ ...newComment, [topicId]: '' });
    }
  };

  return (
    <div>
      <NavBar />
      <Carosel />

      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 mt-10">Forum Diskusi</h1>

      {/* Form untuk menambah topik baru */}
      <div className="bg-gray-100 p-6 shadow-md rounded-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Buat Topik Baru</h2>

        {/* Input untuk judul topik */}
        <input
          type="text"
          className="w-full p-4 mb-4 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="Apa yang ingin Anda tanyakan atau bagikan?"
          value={newTopic.title}
          onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
        />

        {/* Input untuk deskripsi topik */}
        <textarea
          className="w-full p-4 mb-4 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="Berikan detail lebih lanjut tentang pertanyaan atau informasi yang ingin Anda bagikan."
          value={newTopic.description}
          onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
        />

        {/* Tombol untuk menambah topik */}
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleAddTopic}
          >
            Kirim
          </button>
        </div>
      </div>

      {/* Daftar topik */}
      {topics.map((topic) => (
        <div key={topic.id} className="bg-gray-100 p-6 shadow-md rounded-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-700">{topic.title}</h2>
            <span className="text-sm text-gray-600">#{topic.id}</span>
          </div>
          <p className="text-gray-700 mb-6">{topic.description}</p>

          {/* Menampilkan komentar */}
          <div>
            {topic.comments.map((comment) => (
              <div key={comment.id} className="flex items-start mb-4">
                <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full mr-4">
                  {comment.id}
                </div>
                <div className="text-gray-800 bg-white p-4 rounded-md shadow-lg">
                  <p className="font-semibold text-blue-600">{comment.username}</p>
                  <p>{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form untuk menambah komentar */}
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md mt-4"
            placeholder="Tulis komentar..."
            value={newComment[topic.id] || ''}
            onChange={(e) =>
              setNewComment({ ...newComment, [topic.id]: e.target.value })
            }
          />
          <button
            className="bg-green-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => handleAddComment(topic.id)}
          >
            Kirim Komentar
          </button>
        </div>
      ))}

      <FeaturesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Forum;
