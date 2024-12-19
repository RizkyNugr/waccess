import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate dari React Router

const SignUpPage = () => {
  const navigate = useNavigate(); // Gunakan hook useNavigate untuk navigasi
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: nama,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      const data = await response.json();
      console.log(data); // Jika ada data yang ingin Anda tampilkan/gunakan
      navigate('/login'); // Navigasi ke login setelah berhasil
    } catch (error) {
      setError(error.message); // Set error jika terjadi kesalahan
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-600">
      <div className="w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg flex flex-col md:flex-row">
        
        {/* Gambar Samping */}
        <div className="w-full md:w-1/2 p-5">
          <img
            src="/img/loginside.png" // Pastikan path gambar sesuai
            alt="Sign Up Side Graphic"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Formulir Sign-Up */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create an Account</h2>
          <p className="text-gray-400 mb-6">
            Already have an account? <a href="/login" className="text-blue-400 hover:underline">Log in</a>
          </p>

          {/* Tampilkan error jika ada */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Input nama */}
          <input
            type="text"
            placeholder="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)} // Update state
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none"
          />

          {/* Input Email */}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none"
          />

          {/* Input Password */}
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none"
          />

          {/* Terms Checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-400">
              I agree with the <a href="/termscon" className="text-blue-400 hover:underline">terms & conditions</a>
            </label>
          </div>

          {/* Tombol Buat Akun */}
          <button
            onClick={handleCreateAccount} // Tambahkan fungsi navigasi ke tombol
            className="w-full p-3 mb-4 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Create Account
          </button>

          {/* Tombol Sign Up dengan Google */}
          <button className="w-full p-3 mb-4 bg-white text-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/img/google.png" alt="Google Icon" className="w-6 h-6 mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
