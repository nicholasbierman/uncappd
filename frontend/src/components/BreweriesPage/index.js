import { fetch } from '../../store/csrf';
import { useEffect, useState } from 'react';

const BreweriesPage = () => {
    const [ currentBreweries, setBreweries ] = useState([]);

    useEffect(async () => {
        const response = await fetch('/api/breweries');
        setBreweries(response.data.breweries);
    }, []);

    return (
        <div id="breweries-page">
            <h2>Check out the Top Rated Breweries</h2>
            {currentBreweries && currentBreweries.map(brewery => {
                return <h3>{ brewery.name }</h3>
            })}
        </div>
    )
};

export default BreweriesPage;