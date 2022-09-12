import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormStyle from "../styles/FormStyle";
import { signIn } from "../services/mywallet";

export default function LoginScreen() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function login(e) {
        e.preventDefault();
        const body = {
            ...form,
        };

        signIn(body)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", res.data.name);
                navigate("/home");
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <FormStyle>
                    <input
                        placeholder='E-mail'
                        type='email'
                        name='email'
                        onChange={handleForm}
                        value={form.email}
                    />
                    <input
                        placeholder='Senha'
                        type='password'
                        name='password'
                        onChange={handleForm}
                        value={form.password}
                    />
                    <button>Entrar</button>
                    <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
                </FormStyle>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    h1 {
        font-family: Saira Stencil One;
        font-size: 32px;
        margin-bottom: 24px;
    }
`;
