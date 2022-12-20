import React from 'react';
import UseTitle from '../../Assets/Hooks/UseTitle';
import Banner from './Banner/Banner';

const Home = () => {
    UseTitle('Home')
    return (
       <main>
       <Banner/>
       
       </main>
    );
};

export default Home;