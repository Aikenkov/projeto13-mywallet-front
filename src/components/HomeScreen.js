import styled from "styled-components";
import Record from "./Record";
import logout from "../assets/logout.png";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import { useEffect, useState } from "react";
import { getHistory } from "../services/mywallet";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
    const [history, setHistory] = useState([]);
    const [balance, setBalance] = useState(0);
    const name = localStorage.getItem("name");
    const navigate = useNavigate();

    useEffect(() => {
        getHistory()
            .then((res) => {
                setHistory(res.data.history);
                let num = res.data.balance.replace(".", ",");
                setBalance(num);
            })
            .catch((err) => {
                alert(err.data);
            });
    }, []);

    return (
        <Wrapper>
            <div>
                <h1>Olá {name}</h1>
                <img onClick={() => navigate("/")} src={logout} alt='logout' />
            </div>

            {history.length > 0 ? (
                <>
                    <Records>
                        <div>
                            {history.map((item, i) => {
                                return (
                                    <Record
                                        key={i}
                                        description={item.description}
                                        date={item.date}
                                        value={item.value}
                                        type={item.type}
                                    />
                                );
                            })}
                        </div>
                    </Records>
                    <Balance>
                        <p>SALDO</p> <span>{balance}</span>
                    </Balance>
                </>
            ) : (
                <NoRecords>
                    <p>Não há registros de entrada ou saída</p>
                </NoRecords>
            )}

            <NewRecord>
                <div onClick={() => navigate("/new-entrie")}>
                    <img src={plus} alt='plus png' />
                    <h2>Nova entrada</h2>
                </div>
                <div onClick={() => navigate("/new-exit")}>
                    <img src={minus} alt='minus png' />
                    <h2>Nova saída</h2>
                </div>
            </NewRecord>
        </Wrapper>
    );
}

const NoRecords = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: #868686;
        font-size: 20px;
        width: 250px;
        text-align: center;
    }
`;

const Records = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    height: 400px;
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    overflow-y: scroll;

    & > :first-child {
        max-height: 90%;
        width: 100%;
    }
`;

const Balance = styled.div`
    padding: 0 12px;
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7%;
    min-height: 20px;
    background-color: #ffffff;

    p {
        font-size: 17px;
        font-weight: 700;
        color: black;
    }
    span {
        font-size: 17px;
        color: ${(balance) => (balance < 0 ? "#C70000" : "#03AC00")};
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
        cursor: pointer;
    }

    & > :first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;
    }
`;
