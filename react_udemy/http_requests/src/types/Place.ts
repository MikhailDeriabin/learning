
export type Place = {
    lat: number;
    lon: number;
}

export type PlaceUI = {
    id: number;
    title: string;
    lat: number;
    lon: number;
    image: {
        src: string;
        alt: string;
    };
}