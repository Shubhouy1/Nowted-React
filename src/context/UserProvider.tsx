import { useState } from "react";
import { UserContext } from "./UserContext";

type UserProviderProps ={
    children: React.ReactNode
};

function UserProvider ({children}:UserProviderProps){
    const [currSelectedFolderId, setCurrSelectedFolderId] = useState<string|null>(null)
    const[activeView,setActiveView] = useState<"folder"|"favorites"|"archived"|"trash">("folder")

    return(
        <UserContext.Provider value={{
            currSelectedFolderId,setCurrSelectedFolderId,
            activeView,setActiveView
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
