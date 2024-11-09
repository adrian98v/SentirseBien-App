import './paymentOpcion.css'
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './App.js';
import { db } from "./firebase.js"



function PaymentOption(){

    const {servicio, metodoPago, setMetodoPago} = useContext(DataContext)
    const [showDelayedButton, setShowDelayedButton] = useState(false);
    const [serviceLink, setServiceLink] = useState("")
    const navigate = useNavigate(); // Define navigate usando el hook


    useEffect(()=>{
        

        switch(servicio){
            case "Masaje AntiStress": setServiceLink("https://buy.stripe.com/test_9AQ5nobWq4xle1a5kM"); break;
            case "Masaje Circulatorio": setServiceLink("https://buy.stripe.com/test_5kA9DE2lQaVJ8GQ4gJ"); break;
            case "Masaje Descontracturante": setServiceLink("https://buy.stripe.com/test_eVaeXYd0ue7VbT25kO"); break;
            case "Masaje c/Piedras": setServiceLink("https://buy.stripe.com/test_aEU9DEf8C2pd2is3cH"); break;
            case "belleza Manos y Pies": setServiceLink("https://buy.stripe.com/test_9AQ9DEbWq3th9KUeVs"); break;
            case "belleza Depilacion Facial": setServiceLink("https://buy.stripe.com/test_3cs2bc7Ga7JxaOY7sY"); break;
            case "belleza Lifting Pestaña": setServiceLink("https://buy.stripe.com/test_4gwaHIaSmbZN6yIeVr"); break;
            case "facial CrioFrecuencia Facial": setServiceLink("https://buy.stripe.com/test_eVa4jk0dI0h56yIeVt"); break;
            case "facial LimpiezaProfunda+Hidr": setServiceLink("https://buy.stripe.com/test_8wMaHI2lQd3R5uE8x6"); break;
            case "facial PuntaDiamnte": setServiceLink("https://buy.stripe.com/test_bIY8zAd0ufbZ3mwaFf"); break;
            case "corporal CrioFrecuencia Corpo": setServiceLink("https://buy.stripe.com/test_eVa034bWqe7V2isdRv"); break;
            case "corporal DermoHealth": setServiceLink("https://buy.stripe.com/test_4gwbLM6C68NBg9i9Bc"); break;
            case "corporal Ultracavitacion": setServiceLink("https://buy.stripe.com/test_bIY3fg8Ke1l98GQaFh"); break;
            case "corporal VelaSlim": setServiceLink("https://buy.stripe.com/test_14k5no3pUbZNbT29Be"); break;
        }

    }, [servicio])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDelayedButton(true);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);
  
    return <div className='payment_container'>

        <div className='imagen_container'></div>
        <div className="paymentOption">

        <div className='text_container'>
            <p>Elija su método de pago</p>
        </div>
            <div className="creditoDebito_container">
                <button className="debitoButton" onClick={ ()=>{
                    // setMetodoPago("debito")
                    sessionStorage.setItem('metodo', "debito");
                    
                    window.location.href = serviceLink;

                }}>Débito</button>
                <button className="creditoButton" onClick={ ()=>{
                    // setMetodoPago("credito")
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
}

export default PaymentOption