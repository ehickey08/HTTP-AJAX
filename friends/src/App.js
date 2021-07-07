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
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => {
                this.setState({
                    data:res.data,
                    friend: {
                        name: '',
                        age: '',
                        email: ''
                    }
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
        console.group('CSS in your console??')
        console.table(this.state.data)
        console.log('%c Help', 'color:red; font-size: 20px;')
        console.log('%cTest','text-decoration: underline; padding-left: 50%;')
        return (
            <AppDiv>
                <h1>Add, Update, and Delete Your Friends!</h1>
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
                        friend = {friend} 
                    />
                )}
            </AppDiv>
        );
    }
}

const AppDiv = styled.div`
    text-align: center;
    width: 1000px;
    margin: 100px auto;
    background: white;
    padding-bottom: 50px;
    font-family: 'Oswald', sans-serif;
    h1{
        padding: 25px 0;
    }
`

export default App;
