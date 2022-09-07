import styled from "styled-components";
import FormStyle from "../styles/FormStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewExit() {
    const [form, setForm] = useState({
        value: "",
        description: "",
    });

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Wrapper>
            <h1>Nova saída</h1>
            <FormStyle>
                <form onSubmit={handleForm}>
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
