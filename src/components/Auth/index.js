import React, { useState } from "react";
import SignUp from "./SignUp";
import CheckInternet from '../Network/CheckInternet';
import AuthHeader from "./AuthHeader";
import AuthContainer from './AuthContainer';

function Auth() {
    const [login, setLogin] = useState(false);

    return <AuthContainer >

        <CheckInternet>

            <AuthHeader login={login} setLogin={setLogin} />

            {login ? (
                <p>

                    The Login Form

                </p>
            ) : (

                    <SignUp />
                )}
        </CheckInternet>

    </AuthContainer>
}


export default Auth; 
