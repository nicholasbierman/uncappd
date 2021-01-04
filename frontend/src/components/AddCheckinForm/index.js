import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AddCheckinForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) return <Redirect to="/" />
    return (
        <div id="addCheckinForm-page">
            <h1>Hello</h1>
        </div>
    )
}

export default AddCheckinForm;