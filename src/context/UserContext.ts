import { createContext } from "react";

type ContextType={
    currSelectedFolderId :string| null
    setCurrSelectedFolderId : React.Dispatch<React.SetStateAction<string|null>>
    activeView : "folder"|"favorites"|"archived"|"trash"
    setActiveView :React.Dispatch<React.SetStateAction<"folder"|"favorites"|"archived"|"trash">>
    search:string
    setSearch : React.Dispatch<React.SetStateAction<string>>
}

export const UserContext =createContext<ContextType>({
    currSelectedFolderId : null,
    setCurrSelectedFolderId : ()=>{},
    activeView : "folder",
    setActiveView : ()=>{},
    search : "",
    setSearch : ()=>{}
})