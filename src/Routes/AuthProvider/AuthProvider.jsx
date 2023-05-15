import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase";


export const CarContext = createContext('')
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }  

    const profile = (user, name) => {
        return updateProfile(user, {displayName: name})
    }

    const verification = (user) => {
        return sendEmailVerification(user)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }

    }, [])

    const logout = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
     }
 
     const githubLogin = () => {
       return signInWithPopup(auth, githubProvider)
     }
    

    const contextValue = {
        register,
        profile,
        verification,
        googleLogin,
        githubLogin,
        login,
        passwordReset,
        user,
        loading,
        logout
    }

    return (
        <CarContext.Provider value={contextValue}>
            {children}
        </CarContext.Provider>
    );
};

export default AuthProvider;