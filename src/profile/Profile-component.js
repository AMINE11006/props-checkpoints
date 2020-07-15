import React from 'react';
import photo from '../photo.png';
import PropTypes from 'prop-types';


const Picture = props =>{
    return(
        <div>
            {props.children}
        </div>
    );
};

const Profile = props =>{

    const handleName = e =>{
        e.preventDefault();
        alert(props.fullName);
    }

    return(
        <div style={{
            backgroundColor: "yellow",
            height: "auto",
            width: "350px",
            color: "red",
        }}>
            <Picture>
                <img src={photo} alt="Profile"></img>
            </Picture>
            <p>Full Name: {props.fullName}</p>
            <p>Bio: {props.bio}</p>
            <p>Profession: {props.profession}</p>
            <a href="/" onClick={handleName}>full Name alert</a>
        </div>
    );
};

Profile.defaultProps = {
    fullName: "Name Name",
    bio: "Example",
    profession: "My Job",
};


Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}

export default Profile;