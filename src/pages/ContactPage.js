import { IoMdChatboxes } from "react-icons/io";
import React from 'react';
import ContactCard from '../components/Cards/ContactCards.js';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/pages/contact.scss';
const ContactSection = () => {
    return (
        <>
            <h2 className="titulo_contato">Nossos Contatos</h2>
            <div className="contact-section">
                <ContactCard
                    title="Endereço"
                    icon={<FaMapMarkerAlt />}
                    text="Av. Elias Yazbek, 606 - Quinhau, <br>Embu das Artes - SP, 06803-000"
                />
                <ContactCard
                    title="Contatos"
                    icon={<FaPhoneAlt />}
                    text={`
                        <a href="https://wa.me/551190888769" target="_blank" rel="noopener noreferrer">Clique para abrir no WhatsApp</a><br/>
                        Telefone: (11) 9088-8769
                    `}
                />

                <ContactCard
                    title="Horário de Funcionamento"
                    icon={<FaClock />}
                    text="Segunda à Sexta: 9h às 18h<br>Finais de Semana: 9h às 15h"
                />
                <ContactCard
                    title="Contatos Sociais"
                    icon={<IoMdChatboxes />}
                    text={`<a href="https://www.instagram.com/fly.vet/"> <br>@clinicaveterinaria.vidaanimal</a> vidaanimal@gmail.com`}
                />
            </div>
        </>

    );
};

export default ContactSection;
