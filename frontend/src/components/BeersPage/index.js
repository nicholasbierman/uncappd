import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBeers } from "../../store/beers";
import "./BeersPage.css";

const BeersPage = () => {
    const dispatch = useDispatch();
    const currentBeers = useSelector(state => state.beers.beers);

    useEffect(() => {
        dispatch(fetchAllBeers());
    }, [dispatch]);

    return (
        <div id="beers-page">
            <h3>Top Rated Beers</h3>
            <p class="content-explainer"><strong>The list shows the top beers, based on our weighted average formula, which effectively rates all beers against each-other. A beer must have 150 ratings or more to qualify for this list.For more information on our rating system, please view <a class="orange-link" href="https://help.untappd.com/hc/en-us/articles/360034136372-How-are-ratings-determined-on-Untappd-">our ratings explainer.</a></strong></p>
            {currentBeers && currentBeers.map(beer =>
                <div class="beer-list-container">
                    <div class="beer-list-item">
                        <div class="beer-list-item-info">
                            <h5>{ beer.beer_name }</h5>
                            <p>{ beer.beer_type }</p>
                            <p>{ beer.beer_description }</p>
                        </div>
                        <div class="beer-list-item-stats">
                            <p class="abv">{ beer.abv }% ABV</p>
                            <p class="ibu">{ beer.ibu } IBU</p>
                        </div>
                    </div>
                <button class="btn btn-secondary">Check In This Beer!</button>
                </div>
            )}
        </div>
    )
};

export default BeersPage;