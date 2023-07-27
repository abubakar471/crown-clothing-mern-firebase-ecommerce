// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
    // if u want to enable with signin with redirect than just uncomment useEffect and logGoogleRedirectUser
    // function and the button that is inside the return value of this component.

    // useEffect(() => {
    //     // we can not directly use async function with the function callback we get from useEffect
    //     // thats why we created another function called getResult to create and call a async 
    //     // function 
    //     const getResult = async () => {
    //         const response = await getRedirectResult(auth);

    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getResult();
    // }, []);



    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({ user });
    // }

    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleRedirectUser}>sign in with google redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication