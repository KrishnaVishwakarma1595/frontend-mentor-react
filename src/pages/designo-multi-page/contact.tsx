import React, { useEffect, useState } from 'react';
import Styles from '../../styles/designo-multi-page/index.module.css';
import DesignoHeader from '../../components/designo-multi-page/designo-header';
import DesignoFooter from '../../components/designo-multi-page/designo-footer';
import Locations from '../../components/designo-multi-page/locations';
import { validateEmail } from '../../services/utils';
import { toast, Bounce } from 'react-toastify';
import { ScrollToTop } from '../../components/designo-multi-page/scroll-to-top';

interface CONTACT{
    name: string;
    email: string;
    phone: string;
    message: string;
};

interface CONTACT_ERROR{
    name: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
}

const ErrorMessage = ({ message } : { message: string }) => {
    return (
        <div className={Styles.errorMessage} aria-hidden="true">
            <span className="fs12 fontJost lh-26 whiteColor" style={{ fontStyle: 'italic'}}>
                { message }
            </span>
            <span style={{ width: 20, height: 20 }}>
                <img src='/designo-multi-page/err.svg' alt='' />
            </span>
        </div>
    )
}

const Contact = () => {

    const [state, setState] = useState<CONTACT>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [error, setErrorState] = useState<CONTACT_ERROR>({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        if(e.target.name === 'email'){
            setErrorState({
                ...error,
                email: !validateEmail(e.target.value)
            })
        } else {
            setErrorState({
                ...error,
                [e.target.name]: e.target.value ? false : true
            })
        }
    }

    const allowOnlyNumbers = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode < 48 || charCode > 57) {
            evt.preventDefault();
        }
    }

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(Object.values(error).includes(true)){
            setErrorState({
                ...error,
                name: state.name ? false : true, 
                email: state.email ? false : true, 
                phone: state.phone ? false : true, 
                message: state.message ? false : true, 
            })
            toast.error('Please fill the form!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            toast.success('Submitted Successfully!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setState({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        }
    }

    return (
        <div className={Styles.designo__main}>
            <ScrollToTop />
            <DesignoHeader />
            <div className={Styles.dsgn__cntc_cntr}>
                <div className='d-flex flex-column' style={{ gap: 32, paddingTop: 80 }}>
                    <h1 className='m-0'>Contact Us</h1>
                    <p className='m-0'>
                        Ready to take it to the next level? Let’s talk about your project or idea and find out 
                        how we can help your business grow. If you are looking for unique digital experiences 
                        that’s relatable to your users, drop us a line.
                    </p>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className={Styles.dsgn__frm_field}>
                        <input type='text' placeholder='Name' name='name' onChange={onInputChange} required 
                        value={state.name} />
                        {
                            error.name ? ( <ErrorMessage message="Can't be empty" /> ) : null
                        }                        
                    </div>
                    <div className={Styles.dsgn__frm_field}>
                        <input type='email' placeholder='Email Address' name='email' required 
                        value={state.email} onChange={onInputChange} />
                        {
                            error.email ? ( <ErrorMessage message="Please use a valid email address" /> ) : null
                        }
                    </div>
                    <div className={Styles.dsgn__frm_field}>
                        <input type='text' placeholder='Phone' name='phone' onKeyPress={allowOnlyNumbers} 
                        maxLength={12} minLength={10} required value={state.phone} onChange={onInputChange} />
                        {
                            error.phone ? ( <ErrorMessage message="Can't be empty" /> ) : null
                        }
                    </div>
                    <div className={Styles.dsgn__frm_field}>
                        <textarea rows={4} placeholder='Your Message' name='message' value={state.message} 
                        onChange={onInputChange} required />
                        {
                            error.message ? ( <ErrorMessage message="Can't be empty" /> ) : null
                        }
                    </div>
                    <button className={Styles.dsgn__frm_actioncta}>
                        Submit
                    </button>
                </form>
            </div>
            <Locations />
            <DesignoFooter hasGetInTouch={false} />
        </div>
    );
}

export default Contact;