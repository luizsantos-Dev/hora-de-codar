import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Supply() {
    const [wayneAlcool, setWayneAlcool] = useState("");
    const [wayneGasolina, setWayneGasolina] = useState("");

    const [starkAlcool, setStarkAlcool] = useState("");
    const [starkGasolina, setStarkGasolina] = useState("");

    const [resultado, setResultado] = useState(null);

    function calcular(e) {
        e.preventDefault();

        const tanque = 42;

        // Converter valores
        const wA = Number(wayneAlcool);
        const wG = Number(wayneGasolina);
        const sA = Number(starkAlcool);
        const sG = Number(starkGasolina);

        // Regras: álcool vantajoso se <= 70% da gasolina
        const wayneCombustivelIdeal =
            wA <= wG * 0.7 ? "Álcool" : "Gasolina";

        const starkCombustivelIdeal =
            sA <= sG * 0.7 ? "Álcool" : "Gasolina";

        // Custo total
        const wayneTotal =
            wayneCombustivelIdeal === "Álcool"
                ? wA * tanque
                : wG * tanque;

        const starkTotal =
            starkCombustivelIdeal === "Álcool"
                ? sA * tanque
                : sG * tanque;

        // Ranking
        const ranking = [
            { posto: "Wayne Oil", total: wayneTotal, combustivel: wayneCombustivelIdeal },
            { posto: "Stark Petrol", total: starkTotal, combustivel: starkCombustivelIdeal }
        ].sort((a, b) => a.total - b.total);

        const melhor = ranking[0];

        setResultado({
            wayneCombustivelIdeal,
            starkCombustivelIdeal,
            wayneTotal,
            starkTotal,
            ranking,
            melhor
        });
    }

    return (
        <div className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">
            <Header />

            <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Abastecimento</h1>

            <form
                className="bg-blue-400 flex flex-col p-[20px] mb-[20px] rounded border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)]"
                onSubmit={calcular}
            >
                <h2 className="text-xl font-bold mb-2">Wayne Oil</h2>
                <label>Álcool:</label>
                <input type="number" className="bg-gray-500 p-1 rounded mb-2"
                       value={wayneAlcool} onChange={(e) => setWayneAlcool(e.target.value)} required />

                <label>Gasolina:</label>
                <input type="number" className="bg-gray-500 p-1 rounded mb-4"
                       value={wayneGasolina} onChange={(e) => setWayneGasolina(e.target.value)} required />

                <h2 className="text-xl font-bold mb-2">Stark Petrol</h2>
                <label>Álcool:</label>
                <input type="number" className="bg-gray-500 p-1 rounded mb-2"
                       value={starkAlcool} onChange={(e) => setStarkAlcool(e.target.value)} required />

                <label>Gasolina:</label>
                <input type="number" className="bg-gray-500 p-1 rounded mb-4"
                       value={starkGasolina} onChange={(e) => setStarkGasolina(e.target.value)} required />

                <button
                    type="submit"
                    className="bg-[var(--border-left-color)] p-2 rounded mx-auto mt-4"
                >
                    Calcular melhor opção
                </button>
            </form>

            {resultado && (
                <div className="bg-gray-700 text-white p-4 rounded w-full max-w-[600px] font-mono">
                    <pre>
{`[Abastecimento]
Wayne Oil -> Álcool: ${wayneAlcool} | Gasolina: ${wayneGasolina}
Stark Petrol -> Álcool: ${starkAlcool} | Gasolina: ${starkGasolina}

Wayne Oil: melhor opção = ${resultado.wayneCombustivelIdeal} | Total (42L) = R$ ${resultado.wayneTotal.toFixed(2)}
Stark Petrol: melhor opção = ${resultado.starkCombustivelIdeal} | Total (42L) = R$ ${resultado.starkTotal.toFixed(2)}

Mais barato abastecer com ${resultado.melhor.combustivel} no posto ${resultado.melhor.posto}.
`}
                    </pre>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Supply;
{/* NEM TINHA FEITO*/}
