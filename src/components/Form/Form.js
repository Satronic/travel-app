import './Form.css';
import React from 'react';
import { useState } from 'react';
import Message from '../Message/Message.js';
import { useSelector, useDispatch } from 'react-redux';
import { getAirlineById } from '../../Redux/Actions/index';



function Form() {

    const selectedAirline = useSelector(state => state.selectedAirline);
    const dispatch = useDispatch();

    const [stateMessage, setStateMessage] = useState({
        visible: false,
        message: 'Tu información fue enviada con éxito, estaremos en contacto contigo.'
    });

    const [inputForm, setInputForm] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
    });

    const [stateForm, setStateForm] = useState({

        name: {
            state: 'initial',
            message: ''
        },
        email:  {
            state: 'initial',
            message: ''
        },
        phone:  {
            state: 'initial',
            message: ''
        },
        age:  {
            state: 'initial',
            message: ''
        },
        state: false
    })


    function onChangeForm(event){
        let name = event.target.name;
        let value = event.target.value;
        let test = false;

        switch (name) {
            case 'name':
                let nameExp = /^[a-zA-Z ]{3,30}$/;
                test = nameExp.test(value);
            break;
        
            case 'email':
                let emailExp = /^[-\w.%+]{3,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 
                test = emailExp.test(value);
                break;

            case 'phone':
                let phoneExp = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
                test = phoneExp.test(value);
                break;

            case 'age':
                let ageExp = /^(1[8-9]|[2-9][0-9]|100)$/;
                test = ageExp.test(value);
                break;

            default:
                break;
        }

        if(value.length === 0){
            return setStateForm({
                ...stateForm,
                [name]: {
                    state: 'initial',
                    message: ``
                }
            })
        }

        if(!test && value.length > 0){
            return setStateForm({
                ...stateForm,
                [name]: {
                    state: 'invalid',
                    message: `Invalid ${name}`
                }
            })
        }

        setStateForm({
            ...stateForm,
            [name]: {
                state: 'valid',
                message: `Valid ${name}`
            },
        })

        setInputForm({
            ...inputForm,
            [name]: value
        })

        return;
    }

    function evalueForm(){
        let arrInputs = Object.values(stateForm);
        let isInvalid = arrInputs.find(input => input.state === 'invalid' || input.state === 'initial');
        // console.log(isInvalid)
        if(isInvalid){
                setStateForm({
                    ...stateForm,
                    state: false
            })
        }
        if(!isInvalid){
            setStateForm({
                ...stateForm,
                state: true
            })
        }
    }

    function onSubmitForm(event){
        event.preventDefault();
        const inputs = document.getElementsByTagName('input');
        
        console.log(inputForm);

        setStateMessage({
            ...stateMessage,
            visible: true
        });
    
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
                
        setStateForm({
            name: {
                state: 'initial',
                message: ''
            },
            email:  {
                state: 'initial',
                message: ''
            },
            phone:  {
                state: 'initial',
                message: ''
            },
            age:  {
                state: 'initial',
                message: ''
            },
            state: false
        })

        setTimeout(()=>{
            setStateMessage({
                ...stateMessage,
                visible: false
            });
            dispatch(getAirlineById(0));
        }, 5000)
    }

    return (
        <section className={Object.keys(selectedAirline).length > 0 ? "section-form" : "section-form-disabled"}>
            <Message content={stateMessage.message} visible={stateMessage.visible}/>
            <div className="section-message">
                <p className="section-message-text">Hola, bienvenido, sabemos que quieres viajar en: </p>
                <p className="section-message-text"><strong>{selectedAirline.name}</strong></p>
                <p className="section-message-text">Por favor diligencia el siguiente formulario:</p>
            </div>
            <form className="form" onSubmit={onSubmitForm} onKeyUp={evalueForm}>
                <fieldset className={stateForm.name.state}>
                    <legend>{stateForm.name.message}</legend>
                        <input
                            id="name"
                            type="text" 
                            name="name"
                            className="form-input"
                            placeholder="Ingresa tu nombre"
                            onChange={onChangeForm}
                        />
                </fieldset>
                <fieldset className={stateForm.email.state}>
                    <legend>{stateForm.email.message}</legend>
                        <input
                            id="email"
                            type="text" 
                            name="email"
                            className="form-input"
                            placeholder="Ingresa tu e-mail"
                            onChange={onChangeForm}
                        />
                </fieldset>
                <fieldset className={stateForm.phone.state}>
                    <legend>{stateForm.phone.message}</legend>
                        <input
                            id="phone"
                            type="text" 
                            name="phone"
                            className="form-input"
                            placeholder="Ingresa tu número celular"
                            onChange={onChangeForm}
                        />
                </fieldset>
                <fieldset className={stateForm.age.state}>
                    <legend>{stateForm.age.message}</legend>
                        <input
                            id="age"
                            type="text" 
                            name="age"
                            className="form-input"
                            placeholder="Ingresa tu edad"
                            onChange={onChangeForm}
                        />
                </fieldset>
                <button className={stateForm.state ? 'form-button-submit': 'button-inactive'} type="submit">
                    ENVIAR
                </button>
            </form>
        </section>
    );
}

export default Form;
