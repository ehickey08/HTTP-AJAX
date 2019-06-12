import React from 'react'
import styled from 'styled-components'

const FriendForm = props => {
    return (
        <FormDiv onSubmit = {(event) => {
            event.preventDefault();
            if(props.friends.find(friend => friend.id ===props.friend.id)) 
                props.updateFriend(props.friend)
            else 
                props.postFriend(props.friend)
            }}>
            <input
                type="text"
                name="name" 
                onChange = {(evt) => props.handler(evt)}
                value = {props.friend.name}
                placeholder = "Name"
            />
            <input 
                type="text"
                name="age" 
                onChange = {(evt) => props.handler(evt)}
                value = {props.friend.age}
                placeholder = "Age"
            />
            <input
                type="text" 
                name="email" 
                onChange = {(evt) => props.handler(evt)}
                value = {props.friend.email}
                placeholder = "Email"
            />
            <input 
                type="submit"
                value="Submit"
            />
        </FormDiv>
    )
}

const FormDiv = styled.form`
   
`

export default FriendForm
