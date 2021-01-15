export interface iProject {
    id: number | string;
    title: string;
    image: string;
    description: string;
    link: string;
}

export interface iSocial {
    id: number | string;
    link: string;
    image: string;
}

export interface iJoke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}