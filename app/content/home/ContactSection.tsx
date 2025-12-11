import { useState } from "react";
import CustomInput from "~/components/main/CustomInput";

const ContactSection = () => {

    const [errors, setErrors] = useState<any>([]);

    const handleSubmit = (event: any) => {
        event.preventDefault(); //Previene la recarga de la pagina

        //Leemos los datos del formulario
        let formData = new FormData(event.target); //Lee los datos del formulario

        let name = formData.get('name');
        let lastname = formData.get('lastname');
        let email = formData.get('email');
        let message = formData.get('message');

        let errorsList = [];

        if(name === ""){
            errorsList.push({
                field: 'name',
                message: 'El nombre es obligatorio'
            });
        }
        if(lastname === ""){
            errorsList.push({
                field: 'lastname',
                message: 'El apellido es obligatorio'
            });
        }
        if(email === ""){
            errorsList.push({
                field: 'email',
                message: 'El correo electrónico es obligatorio'
            });
        }
        if(message === ""){
            errorsList.push({
                field: 'message',
                message: 'El mensaje o comentario es obligatorio'
            });
        }

        console.log(errorsList);

        setErrors(errorsList);

        return;

        // alert(`Gracias por contactarnos ${name}`);
    }

    return (
        <section className="section">
            <h2 className="contact-title text-4xl">
                ¡Contactanos!
            </h2>
            <div className="flex flex-wrap">
                <div className="w-3/5 p-4">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.251046615355!2d-89.14760729999999!3d13.703239400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633745e33e7379%3A0x28df8dc2b46233dc!2sTicongle%20Hub!5e0!3m2!1ses!2ssv!4v1765312345501!5m2!1ses!2ssv" 
                        // width="600" 
                        // height="450" 
                        // style="border:0;" 
                        className="w-full h-full rounded-lg border border-gray-500"
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="w-2/5 p-4">
                    <h3 className="contact-title">
                        Escríbenos tus dudas o comentarios
                    </h3>
                    <p className="contact-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat corrupti ipsum ab eveniet delectus, incidunt sed dolorem? Aperiam aliquam modi porro
                    </p>
                    <form 
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-wrap">
                            <div className="w-1/2 p-2">
                            <CustomInput 
                                label="Nombre"
                                id="name"
                                name="name"
                                placeholder="Ingresa tu nombre"
                                errors={errors}
                            />
                            </div>
                            <div className="w-1/2 p-2">
                                <CustomInput 
                                    label="Apellido"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Ingresa tu apellido"
                                    errors={errors}
                                />
                            </div>
                            <div className="w-full p-2">
                                <CustomInput 
                                    type="email"
                                    label="Correo electrónico"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    errors={errors}
                                />
                            </div>
                            <div className="w-full p-2">
                                <CustomInput 
                                    label="Mensaje o comentario"
                                    id="message"
                                    name="message"
                                    placeholder="Escribe tu mensaje o comentario"
                                    type="textarea"
                                    errors={errors}
                                />
                            </div>
                            <div className="w-full p-2">
                                <div className="text-center">
                                    <button type="submit" className="btn btn-main">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;