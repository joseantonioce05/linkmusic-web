import Album from "./Album";

export default interface Song {
    _id: string;
    name: string;
    album: Album;
    track: number;
    duration: number;
    realeseDate: string;
    coverImg: string;
    artistId: number;
    createdAt: string;
    updatedAt: string;
    image: string;
    file: string;
}