import { createContext } from "react";

type ContextType={
    currSelectedFolderId :string| null
    setCurrSelectedFolderId : React.Dispatch<React.SetStateAction<string|null>>
    activeView : "folder"|"favorites"|"archived"|"trash"
    setActiveView :React.Dispatch<React.SetStateAction<"folder"|"favorites"|"archived"|"trash">>
}

export const UserContext =createContext<ContextType>({
    currSelectedFolderId : null,
    setCurrSelectedFolderId : ()=>{},
    activeView : "folder",
    setActiveView : ()=>{}
})