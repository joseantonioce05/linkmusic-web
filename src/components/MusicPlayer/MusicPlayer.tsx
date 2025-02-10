import { AudioPlayer } from 'react-audio-play'
import './MusicPlayer.css'
import { useSong } from '../../context/SongContext';
import Album from '../../models/Album';
import { useEffect, useState } from 'react';
import AlbumService from '../../services/AlbumService';

const MusicPlayer = () => {
  useSong();
  console.log(localStorage.getItem('songName'))
  console.log(localStorage.getItem('albumId'))

  const [album, setAlbum] = useState<Album| null>(null);
  const [artist, setArtist] = useState(null);

  const fetchData = async () => {
        try {
          const responseAlbum = await new AlbumService().getAlbum(localStorage.getItem('albumId')!)
          setAlbum(responseAlbum.data.albumSearched);
          setArtist(responseAlbum.data.albumSearched.artist.name)
  
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);


  return <div className='music-player-container fixed bottom-0 left-0 w-full p-3' >
    <div className='grid grid-cols-3'>
      <div className='song-info flex items-center'>
        { album && 
          <img src={import.meta.env.VITE_API_URL + "album/image/" + album.image} alt="" />
        }
        <div className='song-details max-md:collapse'>
          <strong>{localStorage.getItem('songName')}</strong> <br />
          <span>{artist}</span>
        </div>
        
      </div>
      <div>
        <AudioPlayer
        src={import.meta.env.VITE_API_URL + "song/audio/" + localStorage.getItem('song')}
        color="#EFD6AC"
        sliderColor="#EFD6AC"
        style={{ background: "#183A37",  }}
        className='music-player'
        />
      </div>
    </div>
  </div>
}

export default MusicPlayer