import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener ,createUserDocumentFromAuth} from "../components/utils/firebase/firebase.utils";
export const Usercontext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})
export const UserProvider = ({ children }) => {
   
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) =>{
            console.log(user)
            setCurrentUser(user)
            if(user) {createUserDocumentFromAuth(user)}
        })
        return unsubscribe
    }, [])
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }
    return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>
}