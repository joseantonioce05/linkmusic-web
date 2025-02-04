import { useEffect, useState } from "react";
import SongsService from "../../services/SongService";
import Song from "../../models/Song";
import "./LatestSongList.css";

const LatestSongList = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  const fetchData = async () => {
    try {
      const responseSong = await new SongsService().getAllSong();
      console.log(responseSong);
      setSongs(responseSong.data.songList);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="song-list-container">
      <h2>Ultimas canciones</h2>
      <div className="song-list grid max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 max-2xl:grid-cols-6 2xl:grid-cols-7">
        {songs.map((song) => (
          <div key={song._id} className="song-container">
            <img
              src={import.meta.env.VITE_API_URL + "album/image/" + song.album}
              alt=""
            />
            <p>{song.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSongList;
