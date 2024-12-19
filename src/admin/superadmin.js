import React, { useState, useEffect } from "react";
import { FaSearch, FaTh, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null); // State untuk menyimpan pengguna yang sedang diedit
  const [formData, setFormData] = useState({ nama: "", email: "", password: "", role: "" });

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  // Ambil data pengguna
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk menghapus pengguna
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus pengguna ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Gagal menghapus pengguna");
    }
  };

  // Fungsi untuk membuka form edit
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email,  role: user.role });
  };

  // Fungsi untuk menangani perubahan form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/users/${editingUser.id}`, formData);
      setUsers(
        users.map((user) => (user.id === editingUser.id ? { ...user, ...formData } : user))
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Gagal memperbarui pengguna");
    }
  };

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
          <FaTh size={24} className="hover:text-blue-400 cursor-pointer" />
        </div>
        <div className="mt-auto mb-4 text-gray-700">
          <FaSignOutAlt
            size={24}
            className="hover:text-red-500 cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-5 md:p-10 rounded-tl-lg">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-blue-600 font-bold text-lg">SUPER ADMIN</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-800"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg w-full">
          <header className="px-6 py-4 border-b">
            <h1 className="text-2xl font-bold text-blue-600">User Management</h1>
          </header>
          <div className="p-6">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-blue-700">
                  <th className="text-left px-4 py-2 border border-gray-200">Email</th>
                  <th className="text-left px-4 py-2 border border-gray-200">Role</th>
                  <th className="text-left px-4 py-2 border border-gray-200">Tanggal Dibuat</th>
                  <th className="text-center px-4 py-2 border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200">
                        <div>
                          <p>{user.name}</p>
                          <p className="text-sm text-gray-700">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        <span className="bg-blue-200 text-black px-2 py-1 rounded-full text-sm">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-2 border border-gray-200">{user.createdDate}</td>
                      <td className="px-4 py-2 border border-gray-200 text-center">
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-500 hover:text-blue-700 px-2"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-500 hover:text-red-700 px-2"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      Tidak ada pengguna yang ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Popup Form */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Edit User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleSave}
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
