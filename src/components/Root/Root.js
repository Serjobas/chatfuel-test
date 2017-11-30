import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadUsers } from '../../AC'

import UserInfo from '../UserInfo';
import UserList from '../UserList';

class Root extends React.Component {

    componentWillMount() {
        this.props.loadUsers();
    }
    
    render() {
        return (
            <Router>
                <div className="root">
                    <Route exact path='/' component={UserList} /> 
                    <Route path='/users/:id' component={UserInfo} />  
                </div>
            </Router>
        )
    }
}

export default connect(null, { loadUsers })(Root);