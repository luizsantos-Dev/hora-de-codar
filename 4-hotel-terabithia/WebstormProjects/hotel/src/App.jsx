import  Footer from "./components/Footer.jsx"
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function App() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [blocked, setBlocked] = useState(false);
    const corretPassword = "2678";

    function handleLogin(e) {
        e.preventDefault();

        if (blocked) {
            return;
        }
        if (password === corretPassword) {
            alert(`Bem-vindo ao Hotel Luviz, ${name}. É um imenso prazer ter você por aqui!`);
            navigate("/home");
        } else {
            const newAttempt = attempts + 1;
            setAttempts(newAttempt);


            if (newAttempt >= 3) {
                setBlocked(true);
                alert("Sistema bloqueado, você excedeu o número de tentativas");
            } else {
                alert(`Senha incorreta. Você possui ${3 - newAttempt} tentativas!`);
            }
        }
    }
    return(
        <>
            <div
                className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[400px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

                <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Login</h1>

                <form className="bg-blue-400 flex flex-col p-[4px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)]" onSubmit={handleLogin}>
                    <label>Nome:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="Name"  type="text" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>

                    <label>Senha:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>

                    <button
                        type="submit"
                        disabled={blocked}
                        className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] rounded-tr-[4px] mx-auto "
                    >
                        Entrar
                    </button>
                </form>
            </div>

            {/* Footer fora da caixa → agora fica lá embaixo */}
            <Footer />
        </>
    );
}
export default App;


