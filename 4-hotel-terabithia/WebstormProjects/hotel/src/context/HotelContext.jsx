import { createContext, useContext, useState } from "react";

const HotelContext = createContext();

export function HotelProvider({ children }) {

    // QUARTOS
    const [reservasQuartos, setReservasQuartos] = useState(0);
    const [quartosOcupados, setQuartosOcupados] = useState(0);
    const [receitaHospedagem, setReceitaHospedagem] = useState(0);

    // HÓSPEDES
    const [hospedes, setHospedes] = useState([]);

    // EVENTOS
    const [eventosConfirmados, setEventosConfirmados] = useState(0);
    const [receitaEventos, setReceitaEventos] = useState(0);

    // AR-CONDICIONADO
    const [orcamentosAr, setOrcamentosAr] = useState([]);

    // FUNÇÕES GLOBAIS
    function registrarReservaQuarto(valorReserva) {
        setReservasQuartos(prev => prev + 1);
        setQuartosOcupados(prev => prev + 1);
        setReceitaHospedagem(prev => prev + valorReserva);
    }

    function registrarHospede(nome) {
        setHospedes(prev => [...prev, nome]);
    }

    function registrarEvento(valor) {
        setEventosConfirmados(prev => prev + 1);
        setReceitaEventos(prev => prev + valor);
    }

    function registrarOrcamentoAr(obj) {
        setOrcamentosAr(prev => [...prev, obj]);
    }

    return (
        <HotelContext.Provider value={{
            reservasQuartos,
            quartosOcupados,
            receitaHospedagem,

            hospedes,
            registrarHospede,

            eventosConfirmados,
            receitaEventos,
            registrarEvento,

            orcamentosAr,
            registrarOrcamentoAr,

            registrarReservaQuarto
        }}>
            {children}
        </HotelContext.Provider>
    );
}

export function useHotel() {
    return useContext(HotelContext);
}
