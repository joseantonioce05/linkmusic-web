import axios from "axios";

export default class AlbumService {
    //private baseUrl: string = 'http://localhost:3910/api/album'
    // private baseUrl: string = 'https://5e5e-138-199-50-139.ngrok-free.app/api/album'
    private baseUrl = import.meta.env.VITE_API_URL + 'album';

    getAlbum(artistId: string){
        return axios.get(`${this.baseUrl}/one/${artistId}`, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",             
            }
        })
    }

    getAll(artistId: string){
        return axios.get(`${this.baseUrl}/list/${artistId}`, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",             
            }
        })
    }

    getAllAlbums(){
        return axios.get(`${this.baseUrl}/listAll/`, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",             
            }
        })
    }

    getImageAlbum(imageId: string){
        return axios.get(`${this.baseUrl}/image/${imageId}`, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",
            }
        })
    }

}