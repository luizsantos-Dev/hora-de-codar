import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function Events() {

    const [value, setValue] = useState(null);
    const [hours, setHours] = useState(null);
    const [week, setWeek] = useState("");
    const [company, setCompany] = useState("");
    const [result, setResult] = useState(false);

    let adcLaranja = 0;

    function NumberEvents(e) {
        e.preventDefault();

        if (value <= 0) {
            alert("Número inválido.")
            return;
        } else if (value > 350) {
            alert(`Capacidade excedida.`)
            return;
        } else if (value <= 150) {
            alert(`Com o número de ${value}, o auditório escolhido foi o Laranja.`);
            setResult(true)
            return;
        } else if (value > 150 && value <= 220) {
            adcLaranja = value - 150;
            alert(`Com o número de ${value}, o auditório escolhido foi o Laranja, com um adicional de ${adcLaranja}.`);
            setResult(true)
            return;
        } else {
            alert(`Com o número de ${value}, o auditório escolhido foi o Colorado.`)
            setResult(true)
            return;
        }
    }

    function Agends(e) {
        e.preventDefault();

        const weekFormatted = (week).trim().toLocaleLowerCase();

        const diasUteis = [
            "segunda",
            "terca",
            "terça",
            "quarta",
            "quinta",
            "sexta"
        ];

        const FimdeSemana = [
            "sabado",
            "sábado",
            "domingo"
        ];

        if (!diasUteis.includes(weekFormatted) && !FimdeSemana.includes(weekFormatted)) {
            alert("Dia inválido");
            setResult(false);
            return;
        }
        if (FimdeSemana.includes(weekFormatted)) {
            if (hours >= 7 && hours <= 15) {
                alert(`Auditório marcado da empresa ${company}: na ${week} ás ${hours}h.`);
                setResult(false);
                return;
            } else {
                alert(`Horário incompatível`);
                setResult(false);
                return;
            }
        } else if (diasUteis.includes(weekFormatted)) {
            if (hours >= 7 && hours <= 23) {
                alert(`Auditório marcado da empresa ${company}: na ${week} ás ${hours}h.`);
                setResult(false);
                return;
            } else {
                alert(`Horário incompatível`);
                setResult(false);
                return;
            }
        }
    }






    return (
        <>
            <div

                className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

                <Header />

                <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Eventos</h1>

                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={NumberEvents}>
                    <label>Quantidade de convidados:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="1-350" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} required /><br />

                    <button
                        type="submit"
                        className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] nded-tr-[4px] mx-auto "
                    >
                        Verificar auditório
                    </button>
                </form>

                {result === true && (
                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={Agends}>
                    <label>Horário:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="7-23"  type="number" value={hours} onChange={(e)=>setHours(parseInt(e.target.value))} required /><br/>

                    <label>Dia da semana:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="semana"  type="text" value={week} onChange={(e)=>setWeek(e.target.value)} required /><br/>
                    
                    <label>Nome da companhia:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="Sicredi"  type="text" value={company} onChange={(e)=>setCompany(e.target.value)} required /><br/>

                      <button
                        type="submit"
                        className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] nded-tr-[4px] mx-auto "
                    >
                        Avaliar
                    </button> 
                </form>
                )}


                <Footer />
            </div>
        </>
    );
}

export default Events;