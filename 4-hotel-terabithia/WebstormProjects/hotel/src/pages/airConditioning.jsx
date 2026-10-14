import Header from "../components/Header.jsx";
import {useState} from "react";

import { useHotel } from "../context/HotelContext";

function AirConditioning() {
    const { registrarOrcamentoAr } = useHotel();

    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [desconto, setDesconto] = useState("");
    const [minDesconto, setMinDesconto] = useState("");
    const [deslocamento, setDeslocamento] = useState("");
    const [reservations, setReservations] = useState([]);

    function ArCondicionado(e) {
        e.preventDefault();

        // Converter tudo para número
        const valorNum = Number(value);
        const qtdNum = Number(quantidade);
        const descontoNum = Number(desconto);
        const minNum = Number(minDesconto);
        const deslocNum = Number(deslocamento);

        // Cálculo base
        const bruto = valorNum * qtdNum;

        let descontoref = false;
        let total = bruto + deslocNum;

        // Aplicar desconto se atingir o mínimo
        if (qtdNum >= minNum) {
            const valorDesconto = bruto * (descontoNum / 100);
            total = bruto - valorDesconto + deslocNum;
            descontoref = true;
        }

        // Criar reserva
        const newReservation = {
            empresa: name,
            valoraparelho: valorNum,
            quantidade: qtdNum,
            desconto: descontoNum,
            mindesconto: minNum,
            deslocamento: deslocNum,
            descontoaplicado: descontoref,
            total: total
        };

        // Salvar reserva
        setReservations([...reservations, newReservation]);

        // Mostrar orçamento da empresa
        alert(`
        [Ar-Condicionado]
        Empresa: ${name}
        Valor por aparelho: ${valorNum}
        Quantidade: ${qtdNum}
        Desconto (%): ${descontoNum}
        Mínimo para desconto: ${minNum}
        Deslocamento: ${deslocNum}
        Desconto foi aplicado: ${descontoref}
        Total: R$ ${total.toFixed(2)}
        `);

        // Perguntar se deseja continuar 
        const resposta = confirm(`Deseja informar novos dados? (S/N)`);

        if (!resposta) {
            // Calcular menor e maior orçamento
            const valores = reservations.map(r => r.total).concat(total);
            const empresas = reservations.map(r => r.empresa).concat(name);

            const menorValor = Math.min(...valores);
            const maiorValor = Math.max(...valores);

            const empresaMenor = empresas[valores.indexOf(menorValor)];
            const empresaMaior = empresas[valores.indexOf(maiorValor)];

            const diferencaPercentual = ((maiorValor - menorValor) / menorValor) * 100;

            alert(`
        Melhor orçamento: ${empresaMenor} — R$ ${menorValor.toFixed(2)}
        Pior orçamento: ${empresaMaior} — R$ ${maiorValor.toFixed(2)}
        Diferença percentual: ${diferencaPercentual.toFixed(2)}%
            `);
            registrarOrcamentoAr(newReservation);

        }
    }


    return (
        <div

            className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

            <Header />

            <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Eventos</h1>

                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={ArCondicionado}>
                    <label>Nome da empresa:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="text" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>

                    <label>Valor por aparelho:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={value} onChange={(e)=>setValue(e.target.value)} required /><br/>

                    <label>Quantidade de aparelhos:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={quantidade} onChange={(e)=>setQuantidade(e.target.value)} required /><br/>

                    <label>Percentual de desconto:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={desconto} onChange={(e)=>setDesconto(e.target.value)} required /><br/>

                    <label>Quantidade mínima para desconto:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  type="number" value={minDesconto} onChange={(e)=>setMinDesconto(e.target.value)} required /><br/>

                    <label>Deslocamento:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={deslocamento} onChange={(e)=>setDeslocamento(e.target.value)} required /><br/>

                    <button
                        type="submit"
                        className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] nded-tr-[4px] mx-auto "
                    >
                        Verificar auditório
                    </button>
                </form>
            </div>
    );
}
export default AirConditioning;

{/*



airConditioning.jsx:
import Header from "../components/Header.jsx";
import {useState} from "react";

function AirConditioning() {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [desconto, setDesconto] = useState("");
    const [minDesconto, setMinDesconto] = useState("");
    const [deslocamento, setDeslocamento] = useState("");
    const [reservations, setReservations] = useState([]);

    function ArCondicionado(e) {
        e.preventDefault();

        // Converter tudo para número
        const valorNum = Number(value);
        const qtdNum = Number(quantidade);
        const descontoNum = Number(desconto);
        const minNum = Number(minDesconto);
        const deslocNum = Number(deslocamento);

        // Cálculo base
        const bruto = valorNum * qtdNum;

        let descontoref = false;
        let total = bruto + deslocNum;

        // Aplicar desconto se atingir o mínimo
        if (qtdNum >= minNum) {
            const valorDesconto = bruto * (descontoNum / 100);
            total = bruto - valorDesconto + deslocNum;
            descontoref = true;
        }

        // Criar reserva
        const newReservation = {
            empresa: name,
            valoraparelho: valorNum,
            quantidade: qtdNum,
            desconto: descontoNum,
            mindesconto: minNum,
            deslocamento: deslocNum,
            descontoaplicado: descontoref,
            total: total
        };

        // Salvar reserva
        setReservations([...reservations, newReservation]);

        // Mostrar orçamento da empresa
        alert(`
        [Ar-Condicionado]
        Empresa: ${name}
        Valor por aparelho: ${valorNum}
        Quantidade: ${qtdNum}
        Desconto (%): ${descontoNum}
        Mínimo para desconto: ${minNum}
        Deslocamento: ${deslocNum}
        Desconto foi aplicado: ${descontoref}
        Total: R$ ${total.toFixed(2)}
        `);

        // Perguntar se deseja continuar
        const resposta = confirm(`Deseja informar novos dados? (S/N)`);

        if (!resposta) {
            // Calcular menor e maior orçamento
            const valores = reservations.map(r => r.total).concat(total);
            const empresas = reservations.map(r => r.empresa).concat(name);

            const menorValor = Math.min(...valores);
            const maiorValor = Math.max(...valores);

            const empresaMenor = empresas[valores.indexOf(menorValor)];
            const empresaMaior = empresas[valores.indexOf(maiorValor)];

            const diferencaPercentual = ((maiorValor - menorValor) / menorValor) * 100;

            alert(`
        Melhor orçamento: ${empresaMenor} — R$ ${menorValor.toFixed(2)}
        Pior orçamento: ${empresaMaior} — R$ ${maiorValor.toFixed(2)}
        Diferença percentual: ${diferencaPercentual.toFixed(2)}%
            `);
        }
    }


    return (
        <div

            className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

            <Header />

            <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Eventos</h1>

                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={ArCondicionado}>
                    <label>Nome da empresa:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="text" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>

                    <label>Valor por aparelho:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={value} onChange={(e)=>setValue(e.target.value)} required /><br/>

                    <label>Quantidade de aparelhos:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={quantidade} onChange={(e)=>setQuantidade(e.target.value)} required /><br/>

                    <label>Percentual de desconto:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={desconto} onChange={(e)=>setDesconto(e.target.value)} required /><br/>

                    <label>Quantidade mínima para desconto:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"  type="number" value={minDesconto} onChange={(e)=>setMinDesconto(e.target.value)} required /><br/>

                    <label>Deslocamento:</label>
                    <input className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"   type="number" value={deslocamento} onChange={(e)=>setDeslocamento(e.target.value)} required /><br/>

                    <button
                        type="submit"
                        className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] nded-tr-[4px] mx-auto "
                    >
                        Verificar auditório
                    </button>
                </form>
            </div>
    );
}
export default AirConditioning;

 */}