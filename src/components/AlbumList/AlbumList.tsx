import { useEffect, useState } from "react";
import Album from "../../models/Album";
import AlbumService from "../../services/AlbumService";
import './AlbumList.css'
import { Link } from "react-router-dom";
import imageDefault from "../../assets/default.png"

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

  return <div className="album-container grid max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 xl:grid-cols-6">
    {albums.map((album) => (       
      <div className="grid">
        <div className="album-image">
          <Link to={`/album/${album._id}`}>
            <img src={imageDefault} alt="" />
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
