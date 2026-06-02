import type { folderInfo } from "./folderData";
export type Note ={
    id:string
    folderId :string
    title : string
    content:string
    isFavorite : boolean
    isarchived : boolean
    createdAt : string
    updatedAt : string
    deletedAt : string | null
    folder : folderInfo
}

export type GetNoteResponseType ={
    note : Note
}