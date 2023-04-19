import { useState } from "react"
import { createUserAuthWithEmailAndPassword,createUserDocumentFromAuth } from "../../components/utils/firebase/firebase.utils"
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    console.log(formFields)
    const handleChange = (event) => {

        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }
        try {
            const {user} = await createUserAuthWithEmailAndPassword(email, password)
            const userDocRef=await createUserAuthWithEmailAndPassword(user)
        } catch (error) {
            console.log("There was an error in logging in ", error)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />
                <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />
                <label htmlFor="">Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm