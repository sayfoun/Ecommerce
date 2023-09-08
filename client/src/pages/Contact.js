import React from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
return (
    <Layout title={"contact us"}>
    <div className='row aboutme'>
        <div className='col-md-6'>
            <img
            src='https://i.pinimg.com/564x/21/ae/22/21ae2225088745e6433b5b196464ddec.jpg'
            alt='contactus'
            style={{width:"100%"}}       
            />
        </div>
        <div className='col-md-4'>
            <h1 className='bg- p-2 text white text-center'>Contact </h1>
            <p>
                : CT Rachida Mourouj 3
            </p>
            <p>
                : saifj0170@gmail.com
            </p>
            <p>
                : +21627338633
            </p>
        </div>



    </div>







    </Layout>
)
};

export default Contact;