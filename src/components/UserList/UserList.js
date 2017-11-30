import React from 'react';
import { connect } from 'react-redux';

import UserItem from '../UserItem';

import './UserList.css';



class UserList extends React.Component {

    getUserList (users) {
        return users.map( user => (
            <UserItem key={user.id} id={user.id} name={user.name} imgURL={user.imgURL} />
        ));
    }

    render () {
        return (            
            <div className="user-list">
                
                {this.getUserList(this.props.users)}
        
            </div>
    )
    }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps)(UserList);