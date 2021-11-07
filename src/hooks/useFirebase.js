import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword ,
    signOut,
    GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
    
    const registerUser = (email, password ,name, history) => {
        setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           setAuthError('');
           
           const newUser = { email, displayName: name };
           setUser(newUser)
           //send name to firebase after creation 
                updateProfile(auth.currentUser, {
              displayName: name, 
                }).then(() => {
              
                }).catch((error) => {
              
            });
            history.replace('/')
 
  })
  .catch((error) => {
    setAuthError(error.message);
  
  })
    .finally(() => setIsLoading(false))    
    }
  
    const loginUser = (email, password, location, history) => {
         setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination)
      setAuthError('')
    
  })
  .catch((error) => {
    
      setAuthError(error.message);
  })
  .finally(() => setIsLoading(false))  

  }
  
  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;
     setAuthError('')
  }).catch((error) => {
   
   setAuthError(error.message);
   
  }).finally(() => setIsLoading(false)) ;

  }
    
  // observer user state   
    useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
       setUser(user)
  } else {
   setUser()
       }
       setIsLoading(false)
   });
        return () => unsubscribe()
        
},[])

    const logOut = () => {
      setIsLoading(true)   
     signOut(auth).then(() => {
  // Sign-out successful.
   }).catch((error) => {
  // An error happened.
   })
     .finally(() => setIsLoading(false));
    }



    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
        signInWithGoogle

    }

}
export default useFirebase;