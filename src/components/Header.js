import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import Button from './Button';
import Profile from './UserProfile';
import Login from './Login';
import '../App.css';

const Header = ({title}) => {
    const onClick = ()=> {
        console.log('clicked');
    }
    return (
        <div  >
            <h1 style={ headerStyle}>Welcome To FULL</h1>
            <p>Full helps you to develop your skills and shows right path to grow in your career</p>
            < Login />
            
            {/* <Profile  /> <br />
            <Button color='green' text="Let's Begin" onClick={onClick}/> */}
        </div>
    )
}


Header.defaultProps = {
    title: 'vijayaprasath'
}

Header.propTypes = {
    title: PropTypes.string,
}

const headerStyle = {
    color: 'black', 
    background: 'lightblue'
}

export default Header;