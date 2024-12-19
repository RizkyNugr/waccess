import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [nama, setNama] = useState(''); // Menggunakan nama
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nama,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            const { access_token } = data;
            localStorage.setItem('access_token', access_token); // Simpan token

            // Redirect pengguna sesuai kebutuhan
            navigate('/homepage');
        } else {
            setErrorMessage(data.message || 'Login failed');
        }
    } catch (error) {
        setErrorMessage('An error occurred. Please try again.');
    } finally {
        setIsLoading(false);
    }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-600">
      <div className="w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg flex flex-col md:flex-row">
        
        {/* Gambar Samping */}
        <div className="w-full md:w-1/2 p-5">
          <img
            src="/img/loginside.png" // Pastikan path gambar sesuai
            alt="Login Side Graphic"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Formulir Login */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome back!</h2>
          <p className="text-gray-400 mb-6">Please enter your details</p>

          {/* Input Username */}
          <input
            type="text"
            placeholder="Username"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none"
          />

          {/* Input Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none"
          />

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-400">Remember me for 30 days?</label>
          </div>

          {/* Pesan Kesalahan */}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          {/* Tombol Login */}
          <button
            onClick={handleLogin}
            className="w-full p-3 mb-4 bg-blue-500 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>

          {/* Tombol Login dengan Google */}
          <button className="w-full p-3 mb-4 bg-white text-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/img/google.png" alt="Google Icon" className="w-6 h-6 mr-2" />
            Login with Google
          </button>

          {/* Link ke Sign Up */}
          <p className="text-gray-400 text-center">
            Don’t have an account? <a href="/signin" className="text-blue-400 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
