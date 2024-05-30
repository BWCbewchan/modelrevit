import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if username is "admin" and password is "1111"
    if (username === 'admin' && password === '1111') {
      // Navigate to the main route and pass the username
      navigate('/', { state: { username } });
    } else {
      // Set error message and clear the input fields
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-status">
        <h3>Trạng thái web</h3>
        <ul>
          <li className="login-status-item login-new-model">đã thêm mô hình mới</li>
          <li className="login-status-item login-maintenance">đang bảo trì chặt</li>
          <li className="login-status-item login-fixing">đang sửa lỗi model</li>
        </ul>
      </div>
      <div className="login-box">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <label htmlFor="username">Tên Đăng Nhập</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button className="login-button" type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;