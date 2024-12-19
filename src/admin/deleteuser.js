import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteUser = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log(`User dengan ID ${id} berhasil dihapus`);
    navigate("/superadmin"); // Kembali ke halaman utama setelah hapus
  };

  const handleCancel = () => {
    navigate("/superadmin"); // Batal hapus
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Hapus User</h1>
        <p>Apakah Anda yakin ingin menghapus user dengan ID <strong>{id}</strong>?</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Hapus
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
