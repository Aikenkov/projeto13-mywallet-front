import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormStyle from "../styles/FormStyle";

export default function RegistrationScreen() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        confirm: "",
    });
    const [loading, setLoading] = useState("false");
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function Register(e) {
        e.preventDefault();
        const { name, confirm, email, password } = form;

        if (password !== confirm) {
            return alert("Confirme a senha está errado");
        }

        const body = {
            name,
            email,
            password,
        };

        navigate("/");
    }

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <form onSubmit={Register}>
                <FormStyle>
                    <input
                        placeholder='Nome'
                        type='text'
                        name='name'
                        onChange={handleForm}
                        value={form.name}
                    />
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

                    <input
                        placeholder='Confirme a senha'
                        type='password'
                        name='confirm'
                        onChange={handleForm}
                        value={form.confirm}
                    />
                    <button>Cadastrar</button>
                    <Link to='/'>Já tem uma conta? Entre agora!</Link>
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

    h1 {
        font-family: Saira Stencil One;
        font-size: 32px;
        margin-bottom: 24px;
    }
`;
