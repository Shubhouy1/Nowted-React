import { useState } from "react";
import { UserContext } from "./UserContext";

type UserProviderProps ={
    children: React.ReactNode
};

function UserProvider ({children}:UserProviderProps){
    const [currSelectedFolderId, setCurrSelectedFolderId] = useState<string|null>(null)

    return(
        <UserContext.Provider value={{
            currSelectedFolderId,setCurrSelectedFolderId
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
