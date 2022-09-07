import styled from "styled-components";

export default function FormStyle({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        text-align: center;
        font-weight: 700;
    }
    button {
        margin-bottom: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--sub-color);
        border: none;
        width: 85%;
        height: 45px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
        font-size: 20px;
    }

    input {
        width: 85%;
        color: #000000;
        font-size: 20px;
        background-color: #ffffff;
        margin-bottom: 13px;
        border-radius: 5px;
        border: none;
        padding: 18px 0 17px 15px;
    }

    & ::placeholder {
        color: #000000;
        font-size: 20px;
        opacity: 1;
    }
`;
