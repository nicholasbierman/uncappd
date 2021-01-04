import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAllBeers } from "../../store/beers";
import { fetchAllBreweries } from "../../store/breweries";
import "./AddCheckinForm.css";
import * as chckinActions from "../../store/checkins";

const AddCheckinForm = () => {
    const dispatch = useDispatch();
    const currentBeers = useSelector(state => state.beers.beers);
    const currentBreweries = useSelector(state => state.breweries.breweries);
    const sessionUser = useSelector(state => state.session.user);
    const [ beer, setBeer ] = useState("");
    const [ brewery, setBrewery ] = useState("");
    const [ rating, setRating ] = useState(0);
    const [ reviewBody, setReviewBody ] = useState("");
    
    useEffect(() => {
        dispatch(fetchAllBeers());
        dispatch(fetchAllBreweries());
    }, [ dispatch ])

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    
    if (!sessionUser) return <Redirect to="/" />

    return (
        <div id="addCheckinForm-page">
            <h2>Check-In</h2>
            <div class="form-container">
                <form action="/api/checkins/add" method="POST">
                    <div class="form-group">
                        <label for="beer-select">Which beer would you like to check in?</label>
                        <select id="beer-select" class="form-control-sm" value={beer} onChange={(e) => setBeer(e.target.value)}>
                            { currentBeers && currentBeers.map((beer, i) => 
                                <option key={i}>{beer.beer_name }</option>
                                ) }
                        </select>
                        <label for="brewery-select">Which brewery would you like to check in at?</label>
                        <select class="form-control-sm" id="brewery-select" value={brewery} onChange={(e) => setBrewery(e.target.value)}>

                        { currentBreweries && currentBreweries.map((brewery, i) =>
                            <option key={ i }>
                                {brewery.brewery_name}
                            </option>
                        )}
                        </select>
                        <textarea class="form-control" placeholder="What did you think?" value={ reviewBody } onChange={(e) => setReviewBody(e.target.value)}cols="3">
                        </textarea>
                        <label for="slider" value={ rating }>Rating - { rating } Caps</label>
                        <input type="range" list="tickmarks" class="form-control" id="slider" min="0" max="5" step="0.25" onChange={ (e) => setRating(e.target.value)}></input>
                        <button type="button" class="btn btn-warning">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCheckinForm;