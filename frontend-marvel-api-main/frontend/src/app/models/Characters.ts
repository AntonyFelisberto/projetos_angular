export interface Characters {
    id:string,
    name:string,
    description:string,
    thumbnail:string,
    comics?: { resourceURI: string; name: string }[];
    series?: { resourceURI: string; name: string }[];
    stories?: { resourceURI: string; name: string }[];
    events?: { resourceURI: string; name: string }[];
}