import Song from "./Song";

export default interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    role: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    image: string
    song_favorite: Song[]
}