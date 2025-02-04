import axios from "axios";

export default class SongsService {
  //private baseUrl: string = 'http://localhost:3910/api/song'
  //private baseUrl: string = 'https://5e5e-138-199-50-139.ngrok-free.app/api/song'
  private baseUrl = import.meta.env.VITE_API_URL + "song";

  create(data: any) {
    return axios.post(`${this.baseUrl}/save`, data, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }

  getSong(id:string) {
    return axios.get(`${this.baseUrl}/one/${id}}`, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    })
  }

  getAllSong() {
    return axios.get(`${this.baseUrl}/all/`, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }

  getAll(id: string) {
    return axios.get(`${this.baseUrl}/list/${id}`, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }

  deleteById(id: string) {
    return axios.delete(`${this.baseUrl}/remove/${id}`, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }

  getSongFile(id: string) {
    return axios.get(`${this.baseUrl}/audio/${id}`, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }
}
