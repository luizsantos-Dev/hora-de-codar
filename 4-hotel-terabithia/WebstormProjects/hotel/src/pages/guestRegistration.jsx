import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import {useState} from "react";
import { useHotel } from "../context/HotelContext";

function GuestRegistration() {
    const { registrarHospede } = useHotel();

    const [menuOption, setMenuOption] = useState(0);
    const [nameHosped, setNameHosped] = useState("");
    const [hospedes, setHospedes] = useState([]);

    // Função de cadastro
    function cadastrarHospede(e) {
        e.preventDefault();

        if (hospedes.length >= 15) {
            alert("Capacidade máxima atingida (15 hóspedes).");
            return;
        }

        const existe = hospedes.some(h => h.nome === nameHosped);
        if (existe) {
            alert("Esse hóspede já está cadastrado.");
            return;
        }

        setHospedes([
            ...hospedes,
            {
                nome: nameHosped,
                criadoEm: new Date()
            }
        ]);

        alert(`Hóspede cadastrado: ${nameHosped}`);
        registrarHospede(nameHosped);
        setNameHosped("");
    }

    return (
        <div
            className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] "
        >
            <Header />

            <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">
                Cadastro de Hóspedes
            </h1>

            {/* MENU */}
            <div className="flex flex-col justify-center items-center gap-[2vh]">
                <button onClick={() => setMenuOption(1)} className="bg-[var(--border-left-color)] p-2 rounded w-[200px]">
                    Cadastrar
                </button>
                <button onClick={() => setMenuOption(2)} className="bg-[var(--border-left-color)] p-2 rounded w-[200px]">
                    Pesquisar
                </button>
                <button onClick={() => setMenuOption(3)} className="bg-[var(--border-left-color)] p-2 rounded w-[200px]">
                    Listar
                </button>
                <button onClick={() => setMenuOption(4)} className="bg-[var(--border-left-color)] p-2 rounded w-[200px]">
                    Sair
                </button>
            </div>

            {/* OPÇÃO 1 — CADASTRAR */}
            {menuOption === 1 && (


                <div className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">
                    <h1 className="font-[Caveat-Regular] text-[40px] mt-[2vh]">
                        Cadastrar Hóspede
                    </h1>

                    <form
                        onSubmit={cadastrarHospede}

                        className="bg-blue-400 flex flex-col p-[20px] mb-[5px] rounded border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)]"
                    >
                        <label>Nome do Hóspede:</label>

                        <input
                            className="bg-gray-500 border-[0.5px] border-slate-200 outline-none mt-1 rounded-[2px]"
                            placeholder="Nome"
                            type="text"
                            value={nameHosped}
                            onChange={(e) => setNameHosped(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="bg-[var(--border-left-color)] p-2 rounded mt-4 mx-auto"
                        >
                            Salvar
                        </button>
                    </form>

                    <Footer />
                </div>
            )}
            {/* OPÇÃO 2 - PESQUISAR */}
            {menuOption === 2 && (
                <div className="mt-6 p-4 bg-blue-400 rounded w-full max-w-[600px]">
                    <h2 className="text-xl font-bold mb-4">Pesquisar Hóspedes</h2>

                    <form className="bg-blue-400 flex flex-row rounded"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const texto = e.target.name.value.toLowerCase();

                            const resultados = hospedes.filter(h =>
                                h.nome.toLowerCase().startsWith(texto)
                            );

                            if (resultados.length === 0) {
                                alert("Nenhum hóspede encontrado.");
                            } else {
                                alert("Encontrados:\n" + resultados.map(r => r.nome).join("\n"));
                            }
                        }}
                    >
                        <div className="flex gap-4 w-full">
                        <input
                            className="flex-1 bg-gray-500 border border-slate-200 outline-none p-2 rounded text-white"
                            name="name"
                            placeholder="Nome do Hóspede"
                            type="text"
                            required
                        />

                        <button
                            type="submit"
                            className="flex-1 bg-[var(--border-left-color)] p-2 rounded font-bold text-center"
                        >
                            Pesquisar
                        </button>
                        </div>
                    </form>
                </div>
            )}

            {/* OPÇÃO 3 — LISTAR */}
            {menuOption === 3 && (
                <div className="mt-6 p-4 bg-blue-400 rounded w-full max-w-[600px]">
                    <h2 className="text-xl font-bold mb-4">Lista de Hóspedes</h2>

                    {hospedes.length === 0 && <p>Nenhum hóspede cadastrado.</p>}

                    {hospedes.map((h, i) => (
                        <p key={i}>
                            {i + 1}. {h.nome} - {h.criadoEm.toLocaleString()}
                        </p>
                    ))}

                    <p className="mt-4 font-bold">
                        Total cadastrados: {hospedes.length} / 15
                    </p>
                </div>
            )}
            {/* OPÇÃO 4 - SAIR*/}
            {menuOption === 4 && (
                <div className="mt-6 p-4 bg-blue-400 rounded w-full max-w-[600px] text-center">
                    <h2 className="text-xl font-bold mb-4">Você saiu do sistema</h2>
                    <button className="bg-[var(--border-left-color)] p-2 rounded mt-4" onClick={() => setMenuOption(0)}>
                        Voltar ao menu
                    </button>
                </div>
                )}
            <Footer />
        </div>
    );
}

export default GuestRegistration;

{/*
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import {useState} from "react";

function GuestRegistration({ reservations, rooms }) {

    const [menuOption, setMenuOption] = useState(0);
    const [nameHosped, setNameHosped] = useState("");
    const [hospedes, setHospedes] = useState([]);

    // Função de cadastro
    function cadastrarHospede(e) {
        e.preventDefault();

        if (hospedes.length >= 15) {
            alert("Capacidade máxima atingida (15 hóspedes).");
            return;
        }

        const existe = hospedes.some(h => h.nome === nameHosped);
        if (existe) {
            alert("Esse hóspede já está cadastrado.");
            return;
        }

        setHospedes([
            ...hospedes,
            { nome: nameHosped, criadoEm: new Date() }
        ]);

        alert(`Hóspede cadastrado: ${nameHosped}`);
        setNameHosped("");
    }

    return (
        <div
            className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] "
        >
            <Header />

            <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">
                Cadastro de Hóspedes
            </h1>

            {/* MENU */}
{/*}
<div className="flex flex-col justify-center items-center gap-[2vh]">
    <button
        onClick={() => setMenuOption(1)}
        className="bg-[var(--border-left-color)] p-2 rounded w-[200px]"
    >
        Cadastrar
    </button>

    <button
        onClick={() => setMenuOption(2)}
        className="bg-[var(--border-left-color)] p-2 rounded w-[200px]"
    >
        Pesquisar
    </button>

    <button
        onClick={() => setMenuOption(3)}
        className="bg-[var(--border-left-color)] p-2 rounded w-[200px]"
    >
        Listar
    </button>

    <button
        onClick={() => setMenuOption(4)}
        className="bg-[var(--border-left-color)] p-2 rounded w-[200px]"
    >
        Sair
    </button>
</div>

{/* OPÇÃO 1 — CADASTRAR */}
{/*
{menuOption === 1 && (
    <div
        className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] "
    >

*/}

