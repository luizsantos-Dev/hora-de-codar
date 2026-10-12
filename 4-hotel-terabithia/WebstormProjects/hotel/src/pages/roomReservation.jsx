import  Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function RoomReservation() {
    const navigate = useNavigate();

    const [valued, setValueD] = useState(0);
    const [quantd, setQuantD] = useState(0);
    const [name, setName] = useState("");
    const [tipoq, setTipQ] = useState(0);
    const [numberq, setNumberQ] = useState(0);

    function ProgrammanRoom(e) {
        if(valued <= 0 || quantd <=0 || quantd > 30){
            alert("Valor incorreto")
            navigate("/reservation") ;
        }

    }
    return(
        <>
            <div
                className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[400px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

                <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Reserva de Quartos</h1>

                <form className="bg-blue-400 flex flex-col p-[4px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)]" onSubmit={ProgrammanRoom}>
                    <label>Valor da diária:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="valued"  type="number" value={valued} onChange={(e)=>setValueD(e.target.value)} required /><br/>

                    <label>Quantidade de diárias:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  placeholder="1-30" type="number" value={quantd} onChange={(e) => setQuantD(e.target.value)} required/><br/><br/>

                    <label>Nome do hóspede:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  placeholder="Name" type="name" value={name} onChange={(e) => setName(e.target.value)} required/><br/><br/>

                    <label>Tipo de quarto:</label>
                    <select
                        className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  value={tipoq} onChange={(e) => setTipQ(e.target.value)} required>
                        <option>S</option>
                        <option>E</option>
                        <option>L</option>
                    </select>
                    <br/><br/>

                    <label>Número do quarto:</label>
                    <input
                        className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  placeholder="1-20" type="number" value={numberq} onChange={(e) => setNumberQ(e.target.value)} required/><br/><br/>

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
export default RoomReservation;



