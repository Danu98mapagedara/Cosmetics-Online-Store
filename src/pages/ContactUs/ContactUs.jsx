import React from 'react';
import { useForm } from 'react-hook-form';
import { easeInOut, motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2, duration: 1,ease:easeInOut }
    })
};

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
       try{
        axios.post('http://localhost:8000/api/contact', data)
            .then((response) => {
                console.log('Form submitted successfully:', response.data);
                alert("Form submitted successfully")
            })
        }
        catch(error){
            console.error('Error submitting form:', error);
            alert("Error submitting form")
        }
       
        reset();
        };
    return (
        <div className='con-container'>
            <motion.div className="con-left" 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            >
                <h1>{'Drop your details here, our agents will contact you soon'.toUpperCase()}</h1>
            </motion.div>

            <div className="con-right">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {[
                        { name: "name", type: "text", placeholder: "Full Name", error: errors.name },
                        { name: "emai", type: "email", placeholder: "Email Address", error: errors.email },
                        { name: "number", type: "number", placeholder: "Phone Number", error: errors.number },
                        { name: "message", type: "textarea", placeholder: "Your Message", error: errors.message }
                    ].map((field, index) => (
                        <motion.div 
                            key={field.name} 
                            className="form-row"
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once:false}}
                            custom={index}
                        >
                            {field.type === "textarea" ? (
                                <textarea {...register(field.name, { required: `${field.placeholder} is required` })} placeholder={field.placeholder} />
                            ) : (
                                <input type={field.type} {...register(field.name, { required: `${field.placeholder} is required` })} placeholder={field.placeholder} />
                            )}
                            {field.error && <span className="error">{field.error.message}</span>}
                        </motion.div>
                    ))}
                    <motion.button 
                        className='con-btn'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
