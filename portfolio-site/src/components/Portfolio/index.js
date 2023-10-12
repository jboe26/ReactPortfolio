import React from 'react';
import MickeyHerring from '../../assets/images/MickeyHerringTaxidermy.jpeg';
import KathySite from '../../assets/images/KathysHomeandPet.jpeg'
import './index.scss';
import { Link } from 'react-router-dom'


const Portfolio = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1 className='portfolio-section'>Portfolio</h1>
                
                        <MickeyHerring text="Mickey Herring Taxidermy" />
                            <h3>Mickey Herring Taxidermy</h3>
                            <Link to="www.mickeyherringtaxidermy.org">Mickey Herring Taxidermy</Link>
                        
                        <KathySite text="Kathy's Home & Pet" />
                            <h3>Kathy's Home & Pet</h3>
                            <Link to="www.kathyshomeandpet.com">Kathy's Home & Pet</Link>
                        
            </div>

        </div>
    )
}

export default Portfolio