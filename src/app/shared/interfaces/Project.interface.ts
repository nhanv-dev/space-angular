export interface IProject {
    workspace: string;      // The URL or path to the project
    link: string;      // The URL or path to the project
    name: string;      // The name of the project
    icon: string;      // The icon associated with the project
    isFavorite?: boolean;  // Optional flag indicating if the project is a favorite
}