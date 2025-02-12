import axios from "axios";

type LoginData = { username: string; password: string };
type RegisterData = {
  email: string;
  username: string;
  name: string;
  passsword: string;
};

export default class UsersService {
  //private baseUrl: string = 'http://localhost:3910/api/user';
  //private baseUrl: string = 'https://5e5e-138-199-50-139.ngrok-free.app/api/user';
  private baseUrl = import.meta.env.VITE_API_URL + "user";

  login(data: LoginData) {
    console.log(this.baseUrl);
    return axios.post(`${this.baseUrl}/login`, data);
  }

  register(data: RegisterData) {
    return axios.post(`${this.baseUrl}/register`, data);
  }

  userInfo(idUser: String) {
    return axios.get(`${this.baseUrl}/profile/${idUser}`, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }

  userAddFavorite(idUser: String, songId: String) {
    const favorite = {
      userId: idUser,
      songId: songId
    }

    return axios.post(`${this.baseUrl}/favorite/`, favorite, {
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "ngrok-skip-browser-warning": "69420",
      },
    });
  }
}
