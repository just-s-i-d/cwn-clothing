import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import { signInAuthWithEmailAndPassword, SignInWithGooglePopup } from "../utils/firebase/firebase.utils"
import Button from "../button/button.component"

import "./signin.styles.scss"

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    
    const resetFormFields = () => setFormFields(defaultFormFields)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await signInAuthWithEmailAndPassword(email, password)
         
            resetFormFields()
        } catch (error) {
            switch(error.code){
                case "auth/wrong-password":alert("Incorrect Password")
                break
                case "auth/user-not-found":alert("No such user found")
                break
                default:console.log("There was an error in logging in ", error)
            } 
        }

    }
    const signInWithGooglePopup = async (event) => {
        await SignInWithGooglePopup()  
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account </h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit" onSubmit={handleSubmit}>SIGN IN</Button>
                    <Button type="button" buttonType={"google"} onClick={signInWithGooglePopup}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm