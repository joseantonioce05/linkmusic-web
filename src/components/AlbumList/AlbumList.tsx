import { useEffect, useState } from "react";
import Album from "../../models/Album";
import AlbumService from "../../services/AlbumService";
import './AlbumList.css'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

type Props = {
  artistId: string;
};

const AlbumList = ({ artistId }: Props) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchData = async () => {
    try {
      const response = await new AlbumService().getAll(artistId);
      setAlbums(response.data.albumList);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="album-container grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
    {albums.map((album) => (       
      <div className="grid">
        <div className="album-image">
          <Link to={`/album/${album._id}`}>
            <img src={album.image} alt="" />
          </Link>
        </div>
        <div>
          <p>{album.title}</p>
        </div>  
      </div>
    ))}
  </div>
};

export default AlbumList;
