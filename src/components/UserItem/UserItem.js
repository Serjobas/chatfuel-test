import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';

const UserItem = ({ id, name, imgURL, handleClick }) => {

    return (
        <div className="user-item">
            <img className="user-item__img" src={imgURL} alt={name} />
            <h2 className="user-item__head"> 
                <Link to={`/users/${id}`}> {name} </Link> 
            </h2>
        </div>
    )
}

export default UserItem;