import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen"> {/* Flexbox for centering */}
                <h1 className="text-4xl font-bold mb-4">AGREEM SAINI <span className='text-pink-500'> !!! </span></h1> {/* Large heading with margin */}
                <h2 className="text-2xl mb-2">Email id : agreemsaini50510@gmail.com</h2> {/* Subtitle with margin */}
                <h2 className="text-2xl">Mobile No.: 8808836265</h2> {/* Subtitle */}
            </div>
            <Footer />
        </>
    );
}

export default Contact;
