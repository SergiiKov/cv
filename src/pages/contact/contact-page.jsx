import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import LinksComponent from '../../components/links-component/links-compnent';



import '../contact/contact-page.styles.scss';

const ContactPage = () => {
    return(
        <div className='contact-page'>
            <h2>Contact</h2>
        <FormInput />
        <LinksComponent /> 
        </div>
    )
};

export default ContactPage;