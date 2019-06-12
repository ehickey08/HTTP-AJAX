import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import Friend from './components/Friend';

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

    updateFriend = id => {
        axios.put(`http://localhost:5000/friends/${id}`)
            .then(res => {
                this.setState({
                    data:res.data
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <AppDiv>
                {this.state.data.map(friend => <Friend data = {friend} />)}
                <FormDiv onSubmit = {() => this.postFriend(this.state.friend)}>
                    <input
                        type="text"
                        name="name" 
                        onChange = {this.handleChanges}
                        value = {this.state.friend.name}
                        placeholder = "Name"
                    />
                    <input 
                        type="text"
                        name="age" 
                        onChange = {this.handleChanges}
                        value = {this.state.friend.age}
                        placeholder = "Age"
                    />
                    <input
                        type="text" 
                        name="email" 
                        onChange = {this.handleChanges}
                        value = {this.state.friend.email}
                        placeholder = "Email"
                    />
                    <input 
                        type="submit"
                        value="Submit"
                    />
                </FormDiv>
            </AppDiv>
        );
    }
}

const AppDiv = styled.div`
    text-align: center;
    width: 1000px;
    margin: 0 auto;
`

const FormDiv = styled.form`
   
`

export default App;
