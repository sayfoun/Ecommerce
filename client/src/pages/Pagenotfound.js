import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Pagenotfound = () => {
return (
    <Layout title={"Go Back Page Not Found"}>
        <div className='pnf'>
            <h1 className='pnf-title'>404</h1>
            <h2 lassName='pnf-heading'>Ooops ! Page Note Found</h2>

        <Link>
            Go Back
        </Link>
    
        </div>
    </Layout>
);
};

export default Pagenotfound;