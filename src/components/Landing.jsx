import React from 'react';
import UndrawImg from '../assets/Undraw_Books.svg'

function Landing() {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>San Diego's most awarded library platform</h1>
                        <h2>Find your dream book online with <span className='purple'>Library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawImg} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing