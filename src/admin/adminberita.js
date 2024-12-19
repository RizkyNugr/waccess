import React, { useState, useEffect } from "react";
import { FaSearch, FaTh, FaSignOutAlt, FaNewspaper, FaWater, FaPeopleArrows, FaChalkboard } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBerita, setEditingBerita] = useState(null);
  const [addingBerita, setAddingBerita] = useState(false);
  const [formData, setFormData] = useState({ judul: "", url: "", gambar: "", tanggal: "" });
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch berita data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/berita");
        setBerita(response.data);
      } catch (error) {
        console.error("Error fetching berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle delete berita
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus berita ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/api/berita/${id}`);
      setBerita(berita.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting berita:", error);
      alert("Gagal menghapus berita");
    }
  };

  // Handle edit berita
  const handleEdit = (item) => {
    setEditingBerita(item);
    setFormData({ judul: item.judul, url: item.url, gambar: item.gambar, tanggal: item.tanggal });
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change for gambar
  const handleFileChange = (e) => {
    setFormData({ ...formData, gambar: e.target.files[0] });
  };

  // Handle save changes
  const handleSave = async () => {
    try {
      // Create FormData to send
      const updateData = new FormData();
      updateData.append("judul", formData.judul);
      updateData.append("url", formData.url);
      updateData.append("gambar", formData.gambar);
      updateData.append("tanggal", formData.tanggal);

      // Send PUT request with FormData
      await axios.put(`http://127.0.0.1:8000/api/berita/${editingBerita.id}`, updateData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Update the state with the new data
      setBerita(
        berita.map((item) =>
          item.id === editingBerita.id ? { ...item, ...formData } : item
        )
      );
      setEditingBerita(null);
    } catch (error) {
      console.error("Error updating berita:", error.response ? error.response.data : error.message);
      alert("Gagal memperbarui berita");
    }
  };

  // Handle add berita
  const handleAdd = async () => {
    try {
      // Create FormData to send
      const addData = new FormData();
      addData.append("judul", formData.judul);
      addData.append("url", formData.url);
      addData.append("gambar", formData.gambar);
      addData.append("tanggal", formData.tanggal);

      // Send POST request with FormData
      const response = await axios.post("http://127.0.0.1:8000/api/berita", addData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setBerita([...berita, response.data]);
      setAddingBerita(false);
      setFormData({ judul: "", url: "", gambar: "", tanggal: "" });
    } catch (error) {
      console.error("Error adding berita:", error.response ? error.response.data : error.message);
      alert("Gagal menambahkan berita");
    }
  };

  // Filter berita based on search term
  const filteredBerita = berita.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-800 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-800 text-black">
      {/* Sidebar */}
      <aside className="w-20 md:w-1/5 h-full bg-gray-900 flex flex-col items-center py-5 space-y-8">
        <img src="/img/logo.png" alt="Logo" className="w-10 h-10 mb-4" />
        <div className="space-y-8 text-gray-400">
          <Link to="/admin" className="text-gray-400 hover:text-gray-200">
            <FaTh size={24} className="hover:text-blue-400 cursor-pointer" />
          </Link>
          <Link to="/adminberita">
            <FaNewspaper size={24} className="hover:text-blue-400 cursor-pointer" />
          </Link>
          <FaWater size={24} className="hover:text-blue-400 cursor-pointer" />
          <FaPeopleArrows size={24} className="hover:text-blue-400 cursor-pointer" />
          <FaChalkboard size={24} className="hover:text-blue-400 cursor-pointer" />
        </div>
        <div className="mt-auto mb-4 text-gray-400">
          <FaSignOutAlt size={24} className="hover:text-red-500 cursor-pointer" />
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-5 md:p-10 rounded-tl-lg">
        <div className="flex justify-between items-center mb-5 flex-wrap">
          <h1 className="text-blue-600 font-bold text-lg w-full sm:w-auto">Manajemen Berita</h1>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-800 w-full sm:w-auto"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
        </div>

        <button
          onClick={() => setAddingBerita(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-5"
        >
          Tambah Berita
        </button>

        <div className="bg-white shadow-lg rounded-lg w-full overflow-x-auto">
          <header className="px-6 py-4 border-b">
            <h1 className="text-2xl font-bold text-blue-600">Daftar Berita</h1>
          </header>
          <div className="p-6">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-blue-700">
                  <th className="text-left px-4 py-2 border border-gray-200">Judul</th>
                  <th className="text-left px-4 py-2 border border-gray-200">Url</th>
                  <th className="text-left px-4 py-2 border border-gray-200">Gambar</th>
                  <th className="text-center px-4 py-2 border border-gray-200">Tanggal</th>
                  <th className="text-center px-4 py-2 border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBerita.length > 0 ? (
                  filteredBerita.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200">{item.judul}</td>
                      <td className="px-4 py-2 border border-gray-200">{item.url}</td>
                      <td className="px-4 py-2 border border-gray-200">
                      {item.gambar ? (
                        <img
                          src={`http://localhost:8000/storage/${item.gambar}`}
                          alt="Gambar Berita"
                          className="w-16 h-16 object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No Image</span>
                      )}
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-center">{item.tanggal}</td>
                      <td className="px-4 py-2 border border-gray-200 text-center">
                        <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700 px-2">
                          ✏️
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 px-2">
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Tidak ada berita yang ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {(editingBerita || addingBerita) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              {editingBerita ? "Edit Berita" : "Tambah Berita"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Judul</label>
                <input
                  type="text"
                  name="judul"
                  value={formData.judul}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Url</label>
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gambar</label>
                <input
                  type="file"
                  name="gambar"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Tanggal</label>
                <input
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => (editingBerita ? setEditingBerita(null) : setAddingBerita(false))}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={editingBerita ? handleSave : handleAdd}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
