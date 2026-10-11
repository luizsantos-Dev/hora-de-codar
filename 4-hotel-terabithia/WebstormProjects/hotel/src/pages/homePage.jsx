import ocean from '../assets/ocean.png'
import  Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"

function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center mt-4 bg-[var(--background-box)] w-[80vw] mx-[10%] text-[var(--color-text)] gap-[20px] shadow-[var(--box-shadow)] border-[var(--border-left-color)] border-l-[5px] rounded-[var(--border-radius)] ">
            <Header />
            <h1 className="font-[Caveat-Regular] text-[50px] mt-[2vh]">Bem vindo ao Hotel Luviz</h1>
            <p className="font-bold text-[20px] font-sans">O melhor hotel da região de São Paulo</p>
            <p className="max-w-[900px] leading-relaxed">O Hotel Luviz recebe você com o melhor da hospitalidade
                paulistana, reunindo conforto, elegância
                e uma experiência pensada nos mínimos detalhes. Aqui, cada espaço foi criado para oferecer tranquilidade
                e bem‑estar, seja para quem vem a trabalho ou lazer. Descubra um ambiente onde qualidade, atendimento
                e charme se encontram para tornar sua estadia inesquecível.</p>
            <img src={ocean} alt="oceano" className="max-h-[400px] min-w-[80%] gap-2"></img>
            <Footer />
        </div>
    )
}
export default HomePage;