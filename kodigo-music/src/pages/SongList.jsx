// src/pages/SongList.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import '../styles.css';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({ title: '', artist: '' });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      const songCollection = collection(db, 'songs');
      const songSnapshot = await getDocs(songCollection);
      const songList = songSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSongs(songList);
    };

    fetchSongs();
  }, []);

  const handleAddSong = async () => {
    if (newSong.title && newSong.artist) {
      const songCollection = collection(db, 'songs');
      await addDoc(songCollection, newSong);
      setNewSong({ title: '', artist: '' });
      setShowForm(false);
      // Refetch songs
      const songSnapshot = await getDocs(songCollection);
      const songList = songSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSongs(songList);
    }
  };

  const handleDeleteSong = async (id) => {
    const songDoc = doc(db, 'songs', id);
    await deleteDoc(songDoc);
    // Refetch songs
    const songCollection = collection(db, 'songs');
    const songSnapshot = await getDocs(songCollection);
    const songList = songSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSongs(songList);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="song-list">
      <h1>Song List</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <Link to={`/player?songId=${song.id}`} className="song-link">{song.title} - {song.artist}</Link>
            <button onClick={() => handleDeleteSong(song.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowForm(!showForm)} className="submit-button">
        {showForm ? "Cancel" : "Add Song"}
      </button>
      {showForm && (
        <div className="add-song-form">
          <input
            type="text"
            placeholder="Song Title"
            value={newSong.title}
            onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Artist"
            value={newSong.artist}
            onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
            className="input-field"
          />
          <button onClick={handleAddSong} className="submit-button">Submit</button>
        </div>
      )}
      <button onClick={handleLogout} className="logout-button">Log Out</button>
      </div>
  );
};

export default SongList;