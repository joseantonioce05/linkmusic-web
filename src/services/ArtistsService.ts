import axios from "axios";

export default class ArtistsService {
    //private baseUrl: string = 'http://localhost:3910/api/artist'
    // private baseUrl: string = 'https://5e5e-138-199-50-139.ngrok-free.app/api/artist'
    private baseUrl = import.meta.env.VITE_API_URL + 'artist';

    getAll(){
        return axios.get(`${this.baseUrl}/list`, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",
            }
        })
    }

    getById(id: string){
        return axios.get(`${this.baseUrl}/one/${id}`, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",
            }
        })
    }

    create(data: any){
        return axios.post(`${this.baseUrl}/save`, data, {
            headers: { Authorization: localStorage.getItem('userToken'),
                "ngrok-skip-browser-warning": "69420",
            }
        })
    }
}