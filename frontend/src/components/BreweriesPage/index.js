import { fetch } from '../../store/csrf';
import { useEffect } from 'react';
import { fetchAllBreweries } from '../../store/breweries';
import { useDispatch, useSelector } from 'react-redux';

const BreweriesPage = () => {
    const dispatch = useDispatch();
    const currentBreweries = useSelector(state => state.breweries.breweries);

    useEffect(async () => {
        // const response = await fetch('/api/breweries');
        dispatch(fetchAllBreweries());
        //setBreweries(response.data.breweries);
    }, []);

    return (
        <div id="breweries-page">
            <h2>Top Rated Breweries</h2>
            {currentBreweries && currentBreweries.map(brewery => {
                return <h3>{ brewery.brewery_name }</h3>
            })}
        </div>
    )
};

export default BreweriesPage;