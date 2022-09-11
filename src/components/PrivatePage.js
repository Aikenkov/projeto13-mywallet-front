import { useNavigate } from "react-router-dom";

function RenderError() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/");
    }, 2000);
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {
    const auth = localStorage.getItem("token");
    if (auth) {
        return <>{children}</>;
    } else {
        return RenderError();
    }
}
