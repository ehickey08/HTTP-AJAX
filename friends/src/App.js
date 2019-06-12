import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

class App extends React.Component {
    state = {
        data: [],
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => console.log(err))        
    }
    
    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name] : e.target.value
            }
        })
    }

    postFriend = friend => {
        axios.post("http://localhost:5000/friends", friend)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => console.log(err))
    }

    updateForm = friend => {
        this.setState({
            friend
        })
    }

    updateFriend = friend => {
        console.log('update')
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => {
                this.setState({
                    data:res.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteFriend = id => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <AppDiv>
                <FriendForm 
                    handler = {this.handleChanges} 
                    postFriend = {this.postFriend}
                    updateFriend = {this.updateFriend}
                    friends = {this.state.data}
                    friend = {this.state.friend}
                    />
                    {this.state.data.map(friend => 
                        <Friend  
                            updateForm = {this.updateForm} 
                            deleteFriend = {this.deleteFriend} 
                            friend = {friend} />)}
            </AppDiv>
        );
    }
}

const AppDiv = styled.div`
    text-align: center;
    width: 1000px;
    margin: 0 auto;
`

export default App;
