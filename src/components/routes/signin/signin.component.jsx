import { auth, SignInWithGooglePopup, createUserDocumentFromAuth, SignInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import SignUpForm from "../../signup/signup.component"

const Signin = () => {
    useEffect(() => {
        async function fetchResponse() {
            const response = await getRedirectResult(auth)
            if (response) {
               const userDocRef =await createUserDocumentFromAuth(response.user)
            }
            console.log(response.user)
        }
        fetchResponse()
    })
    const signInWithGooglePopup = async () => {
        const { user } = await SignInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={signInWithGooglePopup}>Sign In with Google Popup</button>
            <button onClick={SignInWithGoogleRedirect}>Sign In with Google Redirect</button>
            <SignUpForm/>
        </div>
    )
}
export default Signin