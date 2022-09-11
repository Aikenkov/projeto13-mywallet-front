import styled from "styled-components";
import FormStyle from "../styles/FormStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postEntrie } from "../services/mywallet";

export default function NewExit() {
    const [form, setForm] = useState({
        value: "",
        description: "",
    });
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    function submit(e) {
        e.preventDefault();
        const body = {
            ...form,
            type: "exit",
        };

        postEntrie(body)
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

    return (
        <Wrapper>
            <h1>Nova saída</h1>
            <FormStyle>
                <form onSubmit={submit}>
                    <input
                        placeholder='Valor'
                        type='text'
                        name='value'
                        onChange={handleForm}
                        value={form.value}
                    />
                    <input
                        placeholder='Descrição'
                        type='text'
                        name='description'
                        onChange={handleForm}
                        value={form.description}
                    />
                    <button>Salvar saída</button>
                </form>
            </FormStyle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5vw;
    height: 100vh;

    h1 {
        margin: 25px 0 40px;
        font-weight: 700;
        font-size: 26px;
    }
`;
