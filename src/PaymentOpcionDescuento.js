import './paymentOpcion.css';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook navigate
import { DataContext } from './App.js';
import { db } from "./firebase.js";

function PaymentOption() {
    const { servicio, metodoPago, setMetodoPago } = useContext(DataContext);
    const [serviceLink, setServiceLink] = useState("");
    const [showDelayedButton, setShowDelayedButton] = useState(false);
    const navigate = useNavigate(); // Define navigate usando el hook

    useEffect(() => {


        //   LINKS CON DESCUENTOS

        switch (servicio) {
            case "Masaje AntiStress": setServiceLink("https://buy.stripe.com/test_7sIeXYd0u3thf5e3cq"); break;
            case "Masaje Circulatorio": setServiceLink("https://buy.stripe.com/test_5kA034bWqd3R3mwaET"); break;
            case "Masaje Descontracturante": setServiceLink("https://buy.stripe.com/test_fZe9DE4tYfbZ4qAaEU"); break;
            case "Masaje c/Piedras": setServiceLink("https://buy.stripe.com/test_aEU9DE4tY8NB4qA8wN"); break;
            case "belleza Manos y Pies": setServiceLink("https://buy.stripe.com/test_cN28zAd0u4xl7CMfZi"); break;
            case "belleza Depilacion Facial": setServiceLink("https://buy.stripe.com/test_3csg22f8C4xl1eoaEW"); break;
            case "belleza Lifting Pestaña": setServiceLink("https://buy.stripe.com/test_5kA7vw9Oie7V8GQ14n"); break;
            case "facial CrioFrecuencia Facial": setServiceLink("https://buy.stripe.com/test_aEU0346C6aVJaOYeVf"); break;
            case "facial LimpiezaProfunda+Hidr": setServiceLink("https://buy.stripe.com/test_cN28zAf8C4xl4qAaF0"); break;
            case "facial PuntaDiamnte": setServiceLink("https://buy.stripe.com/test_8wM8zA1hMd3RbT28wT"); break;
            case "corporal CrioFrecuencia Corpo": setServiceLink("https://buy.stripe.com/test_8wMaHI6C61l92is7sT"); break;
            case "corporal DermoHealth": setServiceLink("https://buy.stripe.com/test_7sIeXYgcG4xl0ak7sQ"); break;
            case "corporal Ultracavitacion": setServiceLink("https://buy.stripe.com/test_8wM1785y24xl6yI00p"); break;
            case "corporal VelaSlim": setServiceLink("https://buy.stripe.com/test_8wMaHIf8C1l9e1a28y"); break;
        }
    }, [servicio]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDelayedButton(true);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='payment_container'>
            <div className='imagen_container'></div>
            <div className="paymentOption">
                <div className='text_container'>
                    <p>Elija su método de pago</p>
                </div>
                <div className="creditoDebito_container">
                    <button className="debitoButton" onClick={() => {
                        sessionStorage.setItem('metodo', "debito");
                        window.location.href = serviceLink;
                    }}>Débito</button>
                    <button className="creditoButton" onClick={() => {
                        sessionStorage.setItem('metodo', "credito");
                        window.location.href = serviceLink;
                    }}>Crédito</button>
                </div>

                {showDelayedButton && (
                    <button className="delayedButton" onClick={() => {
                        navigate('/paymentConfirmation'); // Redirigir a otra página
                    }}>Continuar</button>
                )}
            </div>
        </div>
    );
}

export default PaymentOption;
