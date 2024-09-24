import { useState } from "react";
import { Form, Main } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const navigate = useNavigate();

    const handleSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        try {
            await signInWithEmailAndPassword( auth, email, password );
            toast.success( "Login efetuado com sucesso" );
            navigate("/");
        } catch ( error ) {
            console.log( error );
            toast.error( "Email ou senha inválidos" );
        }
    }

    return (
        <Main>
            <Form onSubmit={ handleSubmit }>
                <h1>Login</h1>

                <input type="email"
                    placeholder="user"
                    value={ email }
                    onChange={ ( e ) => setEmail( e.target.value ) } required />

                <input type="password"
                    placeholder="password"
                    value={ password }
                    onChange={ ( e ) => setPassword( e.target.value ) } required />

                <button type="submit">Submit</button>
            </Form>
        </Main>
    )
};