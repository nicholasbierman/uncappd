import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBeers } from "../../store/beers";

const BeersPage = () => {
    const dispatch = useDispatch();
    const currentBeers = useSelector(state => state.beers.beers);

    useEffect(() => {
        dispatch(fetchAllBeers());
    }, [dispatch]);

    return (
        <div id="beers-page">
            <h2>Top Rated Beers</h2>
            <p><strong>The list shows the top beers, based on our weighted average formula, which effectively rates all beers against each-other. A beer must have 150 ratings or more to qualify for this list.For more information on our rating system, please view <a class="orange-link" href="https://help.untappd.com/hc/en-us/articles/360034136372-How-are-ratings-determined-on-Untappd-">our ratings explainer.</a></strong></p>
            {currentBeers && currentBeers.map(beer =>
                <div class="beer-item">
                    <div>
                        <h3>{ beer.beer_name }</h3>
                        <p>{ beer.beer_type }</p>
                        <p>{ beer.beer_description }</p>
                        <p>{ beer.abv }% ABV</p>
                        <p>{ beer.ibu } IBU</p>    
                    </div>
                    <button class="btn btn-secondary">Check In This Beer!</button>
                </div>
            )}
        </div>
    )
};

export default BeersPage;