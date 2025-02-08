import { useEffect, useState } from "react";
import "./LatestSongList.css";
import Album from "../../models/Album";
import AlbumService from "../../services/AlbumService";

const LatestSongList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchData = async () => {
    try {
      const responseAlbum = await new AlbumService().getAllAlbums();
      console.log(responseAlbum);
      setAlbums(responseAlbum.data.albumList);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="song-list-container">
      <h2>Ultimos albums</h2>
      <div className="song-list grid max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 max-2xl:grid-cols-6 2xl:grid-cols-7">
        {albums.map((album) => (
          <div key={album._id} className="song-container">
            <img
              src={import.meta.env.VITE_API_URL + "album/image/" + album.image}
              alt=""
            />
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSongList;
