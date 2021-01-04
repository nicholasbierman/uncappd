import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCheckinsForUser } from '../../store/checkins';
import "./CheckinsPage.css";

const CheckinsPage = () => {
    const dispatch = useDispatch();
    // const currentCheckins = useSelector(state => state.checkins.checkins);
    const currentCheckins = useSelector(state => state.checkins.checkins);
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(fetchAllCheckinsForUser(sessionUser.id));
    }, [dispatch]);

    return (
        <div class="content" id="checkins-page">
            <h3>Recent Global Activity</h3>
            {currentCheckins && currentCheckins.map((checkin, i) => 
                <div class="checkin-item">
                    <p><a class="orange-link">{ checkin.firstName } { checkin.lastName[0] }</a> is drinking a <a class="orange-link">{ checkin.Checkins[ i ].Beer.beer_name }</a> at <a class="orange-link">{ checkin.Checkins[ i ].purchased_location }</a></p>
                    <p class="checkin-review-body">{ checkin.Checkins[ i ].review }</p>
                    <button class="btn btn-secondary btn-lg"><i class="fas fa-comment"></i>Comment</button><button class="btn btn-secondary btn-lg"><i class="fas fa-beer"></i>Toast</button>
                </div>
            )}
        </div>
    )
};

export default CheckinsPage;