// src/pages/SongPlayer.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import '../styles.css';

const SongPlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const songId = queryParams.get('songId');
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      if (songId) {
        const songDoc = doc(db, 'songs', songId);
        const songSnapshot = await getDoc(songDoc);
        if (songSnapshot.exists()) {
          setSong(songSnapshot.data());
        }
      }
    };

    fetchSong();
  }, [songId]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="song-player">
      {song ? (
        <>
          <h1>Playing: {song.title}</h1>
          <h2>Artist: {song.artist}</h2>
          <audio controls>
            <source src={`path/to/song${songId}.mp3`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
        <button onClick={() => navigate('/songs')} className="back-button">Back</button>
        <button onClick={handleLogout} className="logout-button">Log Out</button>
    </div>
  );
};

export default SongPlayer;