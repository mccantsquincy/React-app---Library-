import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
    return (
       <section id="explore">
          <div className="container">
            <div className="row row__column">
                <div className="section__title">
                    <h2>Explore more <span className='purple'>Books</span></h2>
                </div>
                <Link to="/books">
                    <button className="btn">
                        Explore books
                    </button>
                </Link>
            </div>
          </div>
       </section>
    )
}

export default Explore