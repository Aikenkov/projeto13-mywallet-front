import styled from "styled-components";

export default function Record({ type, description, date, value }) {
    value.replace(".", ",");
    return (
        <Wrapper type={type}>
            <div>
                <span>{date}</span>
                <p>{description}</p>
            </div>
            <h3>{value}</h3>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    min-height: 10px;

    & > :first-child {
        display: flex;
        align-items: center;
    }

    span {
        font-size: 16px;
        color: #c6c6c6;
        margin-right: 8px;
    }

    p {
        font-size: 16px;
        color: #000000;
        width: 80%;
        line-height: 19px;
    }

    h3 {
        font-size: 16px;
        color: ${(props) => (props.type === "entrie" ? "green" : "red")};
    }
`;
