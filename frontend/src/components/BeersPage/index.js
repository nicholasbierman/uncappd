import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBeers } from "../../store/beers";

const BeersPage = () => {
    const dispatch = useDispatch();
    const currentBeers = useSelector(state => state.beers.beers)

    useEffect(async () => {
        dispatch(fetchAllBeers());
    }, [])

    return (
        <div id="beers-page">
            <h2>Top Rated Beers</h2>
            {currentBeers && currentBeers.map(beer => {
                return <h2>{ beer.beer_name }</h2>
            })}
        </div>
    )
};

export default BeersPage;