import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import SongList from './pages/SongList';
import SongPlayer from './pages/SongPlayer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="songs" element={<SongList />} />
          <Route path="player" element={<SongPlayer />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);