import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GuestRegistration from "../pages/guestRegistration";
function RoomReservation() {
    const navigate = useNavigate();

    const [valued, setValueD] = useState(0);
    const [quantd, setQuantD] = useState(0);
    const [name, setName] = useState("");
    const [tipoq, setTipQ] = useState("");
    const [numberq, setNumberQ] = useState(0);
    const [value, setValue] = useState(0);
    const [rooms, setRooms] = useState(Array(20).fill("L"));
    const [reservations, setReservations] = useState([]);
    const [reservationSummary, setReservationSummary] = useState(null);

    function ProgrammanRoom(e) {
        e.preventDefault(); // impede submit automático

        const v = Number(valued);
        const q = Number(quantd);
        const n = Number(numberq);



        if (v <= 0 || q <= 0 || q > 30 || n <= 0 || n > 20) {
            alert("Valor incorreto");
            return; // impede continuação
        }

        // impedir reservar quarto ocupado
        if (rooms[n - 1] === "O") {
            alert(`Quarto ${n} já está ocupado. Escolha um quarto marcado com "L".`);
            return;
        }

        let valueBase = 0;

        if (tipoq === "S") valueBase = (v * q * 1) ;
        if (tipoq === "E") valueBase = (v * q * 1.35) ;
        if (tipoq === "L") valueBase = (v * q * 1.65) ;

        let taxValue = valueBase * 0.1;

        let totalValue = valueBase + taxValue;

        setValue(totalValue);

        // confirmação
        const confirm = window.confirm(
            `Confirmar reserva?\n\nHóspede: ${name}\nQuarto: ${n}\nTotal: R$ ${totalValue.toFixed(2)}`
        );

        if (!confirm) {
            alert("Reserva cancelada.");
            return;
        }

        // ocupar quarto
        const updatedRooms = [...rooms];
        updatedRooms[n - 1] = "O";
        setRooms(updatedRooms);

        // registrar reserva
        const newReservation = {
            hospede: name,
            quarto: n,
            diarias: q,
            total: totalValue
        };

        setReservations([...reservations, newReservation]);


        setReservationSummary(newReservation);

        alert("Reserva confirmada!");

    }
    return (

        <>
            <div
                className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-full max-w-[800px] mx-auto text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">

                <Header />

                <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Reserva de Quartos</h1>

                <form className="bg-blue-400 flex flex-col p-[20px] mb-[5px]  rounded-bl-[4px] rounded-tl-[4px] border-[var(--border-left-color)] border-l-[3px] shadow-[var(--box-shadow)] mb-[20px]" onSubmit={ProgrammanRoom}>
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
                        className=" bg-[var(--border-left-color)] p-2 rounded-bl-[4px] rounded-tr-[4px] mx-auto "
                    >
                        Calcular
                    </button>
                </form>
            </div>

            {/* EXIBIR O STATE AQUI */}
            {reservationSummary && (
                <div className="mt-4 p-4 bg-green-600 text-white rounded border-2 border-white">
                    <h2 className="text-xl font-bold">Resumo da Reserva</h2>
                    <p><strong>Hóspede:</strong> {name}</p>
                    <p><strong>Quarto:</strong> {numberq}</p>
                    <p><strong>Diárias:</strong> {quantd}</p>
                    <p><strong>Total a pagar:</strong> R$ {value.toFixed(2)}</p>
                </div>
            )}

            <h2 className="text-xl mt-4 font-bold">Mapa de Quartos</h2>

            <div className="grid grid-cols-5 gap-2 mt-2">
                {rooms.map((status, index) => (
                    <div
                        key={index}
                        className={`p-2 text-center font-bold rounded ${
                            status === "L" ? "bg-green-500" : "bg-red-500"
                        }`}
                    >
                        {index + 1} - {status}
                    </div>
                ))}
                <GuestRegistration reservations={reservations} rooms={rooms} />
            </div>
            {/* Footer fora da caixa → agora fica lá embaixo */}
            <Footer />
        </>
);
}
export default RoomReservation;



