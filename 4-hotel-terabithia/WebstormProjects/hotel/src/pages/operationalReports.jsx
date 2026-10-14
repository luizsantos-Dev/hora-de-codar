import React from "react";
import Header from "../components/Header.jsx";
import { useHotel } from "../context/HotelContext";

function OperationalReports() {
    const {
        reservasQuartos,
        quartosOcupados,
        receitaHospedagem,
        hospedes,
        eventosConfirmados,
        receitaEventos,
        orcamentosAr
    } = useHotel();

    function gerarRelatorio() {
        const taxaOcupacao = ((quartosOcupados / 20) * 100).toFixed(1);
        const receitaTotal = receitaHospedagem + receitaEventos;

        const relatorio = `
===========================================
            RELATÓRIO OPERACIONAL
===========================================

Total de reservas de quartos confirmadas:   ${reservasQuartos}
Taxa de ocupação atual:                     ${taxaOcupacao}%
Quantidade de hóspedes cadastrados:         ${hospedes.length}
Quantidade de eventos confirmados:          ${eventosConfirmados}

-------------------------------------------
Receita acumulada
-------------------------------------------
Hospedagem:                            R$ ${receitaHospedagem.toFixed(2)}
Eventos:                               R$ ${receitaEventos.toFixed(2)}
Total geral:                           R$ ${receitaTotal.toFixed(2)}

-------------------------------------------
Orçamentos de Ar-Condicionado:          ${orcamentosAr.length}
===========================================
        `;

        alert(relatorio);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">
            <Header />

            <h1 className="font-[Caveat-Regular] text-[40px] mt-[2vh]">
                Relatórios Operacionais
            </h1>

            <button
                className="bg-[var(--border-left-color)] p-3 rounded text-white font-semibold mb-6"
                onClick={gerarRelatorio}
            >
                Gerar Relatório Operacional
            </button>

            <div className="bg-gray-700 text-white p-4 rounded w-full max-w-[600px] text-sm font-mono">
                <pre>
{`===========================================
            RELATÓRIO (VISUAL)
===========================================
Reservas de quartos:        ${reservasQuartos}
Quartos ocupados:           ${quartosOcupados} / 20
Hóspedes cadastrados:       ${hospedes.length}
Eventos confirmados:        ${eventosConfirmados}

Receita hospedagem:         R$ ${receitaHospedagem.toFixed(2)}
Receita eventos:            R$ ${receitaEventos.toFixed(2)}
Total geral:                R$ ${(receitaHospedagem + receitaEventos).toFixed(2)}

Orçamentos Ar-Cond.:        ${orcamentosAr.length}
===========================================`}
                </pre>
            </div>
        </div>
    );
}

export default OperationalReports;
{/*NEM TINHA FEITO*/}
