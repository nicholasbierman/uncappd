import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAllBreweries } from '../../store/breweries';
import { useDispatch, useSelector } from 'react-redux';
import "./BreweriesPage.css";

const BreweriesPage = () => {
    const dispatch = useDispatch();
    const currentBreweries = useSelector(state => state.breweries.breweries);
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        // const response = await fetch('/api/breweries');
        dispatch(fetchAllBreweries());
        //setBreweries(response.data.breweries);
    }, [dispatch]);
    if(!sessionUser) return <Redirect to="/" />
    return (
        <div id="breweries-page">
            <div class="breweries-page-title">
                <h3>Top Rated Breweries</h3>
            </div>
            <p class="content-explainer"><strong>The list shows the top breweries, based on our weighted average formula, which effectively rates all breweries against each-other and gives weight to their beers with higher rating count. A brewery must have at least 1,000 ratings and at least 5 beers in their portfolio to qualify for this list. For more information on our rating system, please view <a class="orange-link" href="https://help.untappd.com/hc/en-us/articles/360034136372-How-are-ratings-determined-on-Untappd-">our ratings explainer.</a></strong></p>

            <div class="brewery-list">
            {currentBreweries && currentBreweries.map(brewery =>
                <div class="brewery-container">
                    <div class="brewery-details">
                    <h5>{ brewery.brewery_name }</h5>
                        <p class="brewery-location">{ brewery.brewery_city }, { brewery.brewery_state } { brewery.brewery_country }</p>
                        <div class="brewery-rating-details">
                            <div class="brewery-rating-details-top">
                                <p class="brewery-num-beers">{ brewery.num_beers } Beers</p>
                                <p class="brewery-rating-count">{ brewery.rating_count } Ratings</p>
                            </div>
                            <div class="brewery-rating-details-bottom">
                                <p class="brewery-rating-score">{ brewery.rating_score }</p>
                            </div>
                        </div>
                    </div>
                </div>
                ) }
            </div>
        </div>
    )
};

export default BreweriesPage;