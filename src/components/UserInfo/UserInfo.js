import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import { editUser } from "../../AC";

import './UserInfo.css';

class UserInfo extends React.Component {

    state = {
        isEdit: false,
        userValue: this.props.user.name 
    }

    handleChange = (e) => {
        this.setState({
           userValue: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit,
            userValue: this.props.user.name
        })
    }

    saveEdit = () => {
        if(!this.state.userValue.length) return ;
        this.props.editUser(this.props.user.id, this.state.userValue, this.props.user.imgURL);
        this.setState({
            isEdit: !this.state.isEdit,
        })
    }

    getEditForm (user) {
        if (this.state.isEdit){
            return (
                <div className="user-info__head"> 
                    <Input value={this.state.userValue} onChange={this.handleChange} className="user-info__input" />
                    <Button onClick={this.saveEdit} type="default" shape="circle" icon="check" />
                    <Button onClick={this.toggleEdit} type="danger" shape="circle" icon="close" />    
                </div>
            )
        }else{
            return (
                <div className="user-info__head">
                    <div className="user-info__head-text"> {user.name}  </div>
                    <Button onClick={this.toggleEdit} type="default" shape="circle" icon="edit" />
                </div>
            )
        }
    }

    render() {
        const { user } = this.props;
        return (
            <div className="user-info">
                <img className="user-info__img" src={user.imgURL} alt={user.name} />

                { this.getEditForm(user) }
                <Link to="/" ><Button className="user-info__back-btn" type="primary" icon="arrow-left">Home</Button> </Link>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;

    return {
        user: state.users.find(user => user.id === id) || {}
        
    }
}

export default connect(mapStateToProps, { editUser } )(UserInfo);