import { createContext } from "react";

type ContextType={
    currSelectedFolderId :string| null
    setCurrSelectedFolderId : React.Dispatch<React.SetStateAction<string|null>>
}

export const UserContext =createContext<ContextType>({
    currSelectedFolderId : null,
    setCurrSelectedFolderId : ()=>{}
})