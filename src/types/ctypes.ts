type MetaData = {
    title : string;
    components: ComponentDetails[];
}

type ComponentDetails = {
    name: string;
    data: ComponentData;
}

type ComponentData = {
    title?:string;
    caption?:string;
    body?:string;
    src?: string;
    alt?: string;
    fullName?: string;
    profilePic?: string;
}

export type {MetaData, ComponentDetails, ComponentData}