function Footer() {
    return (
        <footer className="bg-[var(--footer-header)] w-full mt-10 p-6 text-[var(--color-text)]">

            <div className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-8
        divide-y sm:divide-y-0 sm:divide-x
        divide-white/20
      ">

                {/* Endereço */}
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-lg font-bold">Endereço</h3>
                    <p className="text-lg">Hotel Luviz</p>
                    <p className="text-lg">Avenida das Estrelas, 987</p>
                    <p className="text-lg">Jardim Aurora — São Paulo, SP</p>
                    <p className="text-lg">CEP 04567‑900</p>
                </div>

                {/* Contato */}
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-lg font-bold">Contato</h3>
                    <p className="text-lg">Telefone: (11) 3456‑7890</p>
                    <p className="text-lg">WhatsApp: (11) 98888‑7766</p>
                    <p className="text-lg break-words">E‑mail: contato@hotelluviz.com.br</p>
                </div>

                {/* Horários */}
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-lg font-bold">Horários</h3>
                    <p className="text-lg">Recepção: 24 horas</p>
                    <p className="text-lg">Check‑in: a partir das 14h</p>
                    <p className="text-lg">Check‑out: até 12h</p>
                </div>

                {/* Serviços */}
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-lg font-bold">Serviços</h3>
                    <p className="text-lg">Café da manhã incluso</p>
                    <p className="text-lg">Wi‑Fi gratuito</p>
                    <p className="text-lg">Estacionamento coberto</p>
                    <p className="text-lg">Piscina aquecida</p>
                    <p className="text-lg">Academia 24h</p>
                    <p className="text-lg">Sala de eventos corporativos</p>
                </div>

                {/* Redes sociais */}
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-lg font-bold">Redes sociais</h3>
                    <p className="text-lg">Instagram: @hotelluviz</p>
                    <p className="text-lg">Facebook: /hotelluviz</p>
                    <p className="text-lg">TikTok: @hotelluviz</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;