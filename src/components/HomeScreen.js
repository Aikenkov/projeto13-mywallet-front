import styled from "styled-components";
import logout from "../assets/logout.png";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";

export default function HomeScreen() {
    return (
        <Wrapper>
            <div>
                <h1>Olá Fulano</h1>
                <img src={logout} alt='logout' />
            </div>
            <Records>
                <p>Não há registros de entrada ou saída</p>
            </Records>
            <NewRecord>
                <div>
                    <img src={plus} alt='plus png' />
                    <h2>Nova entrada</h2>
                </div>
                <div>
                    <img src={minus} alt='minus png' />
                    <h2>Nova saída</h2>
                </div>
            </NewRecord>
        </Wrapper>
    );
}

const Records = styled.div`
    width: 100%;
    background-color: #ffffff;
    height: 450px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: #868686;
        font-size: 20px;
        width: 250px;
        text-align: center;
    }
`;

const NewRecord = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 13px;

    img {
        height: 25px;
        width: 25px;
    }

    h2 {
        width: 65px;
        font-size: 17px;
        font-weight: 700;
    }

    & > div {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 17vh;
        width: 48%;
        background-color: var(--sub-color);
        padding: 10px 12px;
        border-radius: 5px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 25px 25px 15px;

    h1 {
        font-weight: 700;
        font-size: 26px;
    }

    & :first-child img {
        height: 25px;
    }

    & > :first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;
    }
`;
