import Artist from "./Artist";

export default interface Album {
    _id: string;
    title: string;
    year: number;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    artist: Artist
}