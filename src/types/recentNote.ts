import type { folderInfo } from "./folderData";

export type recentNotes ={
    id : string,
    folderId : string,
    title : string,
    isFavorite : boolean,
    isArchived : boolean,
    createdAt : string,
    updatedAt : string,
    deletedAt : string,
    preview : string,
    folder : folderInfo
}

export type GetRecentNotesResponseType = {
    recentNotes: recentNotes[]
}