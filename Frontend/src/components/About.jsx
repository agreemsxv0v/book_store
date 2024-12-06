import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen"> {/* Flexbox for centering */}
                <h1 className='text-4xl font-bold mb-6'>
                    About book_store
                    <span className='text-pink-500'> !!! </span>
                </h1>


                <h2 className="text-2xl mb-2">
                    <p className="text-center max-w-3xl">
                        Welcome to book_store, your one-stop platform for discovering, exploring,
                        and purchasing a wide range of books across various genres.
                        Whether you're a fan of thrilling mysteries, heartwarming romances,
                        educational reads, or captivating fiction,
                        our platform provides an extensive collection to cater to all readers.
                    </p>
                </h2> {/* Subtitle with margin */}

            </div>
            <Footer />
        </>
    );
}

export default About;
