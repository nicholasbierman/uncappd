import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAllBeers } from "../../store/beers";
import { fetchAllBreweries } from "../../store/breweries";

const AddCheckinForm = () => {
    const dispatch = useDispatch();
    const currentBeers = useSelector(state => state.beers.beers);
    const currentBreweries = useSelector(state => state.breweries.breweries);
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchAllBeers());
        dispatch(fetchAllBreweries());
    }, [dispatch])
    if (!sessionUser) return <Redirect to="/" />

    return (
        <div id="addCheckinForm-page">
            <h1>Check-In</h1>
            <div class="form-container">
                <form>
                    <div class="form-group">
                        <label for="beer-select">Which beer would you like to check in?</label>
                        <select id="beer-select" class="form-control-sm">
                            { currentBeers && currentBeers.map((beer, i) => 
                                <option key={i}>{beer.beer_name }</option>
                                ) }
                        </select>
                        <label for="brewery-select">Which brewery would you like to check in at?</label>
                        <select class="form-control-sm" id="brewery-select">

                        { currentBreweries && currentBreweries.map((brewery, i) =>
                            <option key={ i }>
                                {brewery.brewery_name}
                            </option>
                        )}
                        </select>
                        <textarea class="form-control" placeholder="What did you think?" cols="3">
                        </textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCheckinForm;