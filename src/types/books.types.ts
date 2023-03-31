export interface IBook {
    id: string;
    volumeInfo: IBookInfo;
}

export interface IBooksResponse {
    config: object;
    headers: object;
    request:object;
    status: number;
    statusText:string;
    items:IBook[];
    totalItems: number;
}

export interface IBookFull {
    config: object;
    headers: object;
    request:object;
    status: number;
    statusText:string;
    items:IBook[]
}

export interface IBookInfo {
    title: string;
    authors?: string[];
    imageLinks?: {
        smallThumbnail:string;
        thumbnail:string;
    };
    categories?: string[];
    description: string;
}

export interface IRequest {
    searchVal: string;
    sortVal: string;
    categoriesVal: string;
}