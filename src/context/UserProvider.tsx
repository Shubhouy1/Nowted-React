import { useState } from "react";
import { UserContext } from "./UserContext";

type UserProviderProps ={
    children: React.ReactNode
};

function UserProvider ({children}:UserProviderProps){
    const [currSelectedFolderId, setCurrSelectedFolderId] = useState<string|null>(null)
    const[activeView,setActiveView] = useState<"folder"|"favorites"|"archived"|"trash">("folder")
    const[search,setSearch] =useState<string>("")

    return(
        <UserContext.Provider value={{
            currSelectedFolderId,setCurrSelectedFolderId,
            activeView,setActiveView,
            search,setSearch
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
