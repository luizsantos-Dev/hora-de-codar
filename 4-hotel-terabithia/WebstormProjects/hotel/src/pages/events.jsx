import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function Events() {

    const [value,setValue] = useState(null);
    const [hours,setHours] = useState(null);
    const [week, setWeek] = useState("");
    const [company, setCompany] = useState("");
    const [result, setResult] = useState(0);
    const [horasEvent, setHorasEvent] = useState(null);
    const [auditorio, setAuditorio] = useState("");
    const [adcLaranja, setAdcLaranja] = useState(0);


    function NumberEvents(e) {
        e.preventDefault();

        if (value <= 0){
             alert("Número inválido.")
        }else if (value > 350){
             alert(`Capacidade excedida.`)
        }else if (value <= 150){
            setAuditorio("Laranja")
             setResult(1)

        }else if (value > 150 && value <= 220){
            const adicional = value - 150;
            setAdcLaranja( adicional > 0 ? adicional : 0 );
            setResult(1)
        }else{
            setAuditorio("Colorado");
            setResult(1)
        }

        return;
};

    function Agends (e) {
        e.preventDefault();

        const weekFormatted = (week).trim().toLocaleLowerCase();

        const diasUteis = [
            "segunda",
            "terça",
            "quarta",
            "quinta",
            "sexta"
        ];

        const FimdeSemana = [
            "sábado",
            "domingo"
        ];

        if ( !diasUteis.includes(weekFormatted) && !FimdeSemana.includes(weekFormatted))
            {
                alert("Dia inválido");
                return;
            }
        if(FimdeSemana.includes(weekFormatted)){
            if (hours >= 7 && hours <= 15){
                setResult(2)
            }else{
                alert(`Horário incompatível`);
            }
        }else if (hours >= 7 && hours <= 23){
            setResult(2)
        }else{
            alert(`Horário incompatível`);
        }

    }

    function Garcon (){
        const Base = value / 12;
        const reforcoGarcon = horasEvent / 2;
        const totGarcon = Base + reforcoGarcon;
        const custoGarcon = 10.50;
        const calculoGarcons = totGarcon * horasEvent * custoGarcon;

        const cafeLitros = value * 0.2;
        const aguaLitros = value * 0.5;
        const salgadosUn = value * 7;

        const custoCafe = cafeLitros * 0.80;
        const custoAgua = aguaLitros * 0.40;
        const custoSalgados = salgadosUn * 0.34;

        const CalcAlimento = custoCafe + custoAgua + custoSalgados;

        const TotEvent = CalcAlimento + calculoGarcons

           const reposta = confirm(`
            [Eventos]
            Convidados: ${value}
            Auditório selecionado: ${auditorio} (${adcLaranja} cadeiras adicionais)

            Dia: ${week}
            Hora inicial: ${hours}
            Duração: ${horasEvent}  
            Empresa: ${company}
            Status: Auditório reservado.

            Garçons necessários: ${totGarcon}
            Custo com garçons: R$ ${calculoGarcons.toFixed(2)}

            Buffet:
            Café: ${cafeLitros.toFixed(1)} L
            Água: ${aguaLitros.toFixed(1)} L
            Salgados: ${salgadosUn.toFixed(0)} un
            Custo buffet: R$ ${CalcAlimento.toFixed(2)}

            Total do evento: R$ ${TotEvent.toFixed(2)}
            Confirmar reserva? (S/N): 
            `)
        if(!reposta){
            alert("Confirmação cancelada.");

        }else{
            alert("Reserva efetuada com sucesso.")

        }
        return;

    }




    return (
         <>
            <div

                className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

                <Header />

                <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Eventos</h1>
                {result === 0 &&(
                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={NumberEvents}>
                    <label>Quantidade de convidados:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="1-350"  type="number" value={value} onChange={(e)=>setValue(Number(e.target.value))} required /><br/>

                    <button    
                    type="submit" 
                    className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] nded-tr-[4px] mx-auto "
                    >
                        Verificar auditório
                    </button>
                </form>
                )}
                {result === 1 && (
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
                {result === 2 && (
                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={Garcon}>

                    <label>Total de horas do evento:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]" placeholder="Nome empresa"  type="number" value={horasEvent} onChange={(e)=>setHorasEvent(e.target.value)} required /><br/>

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