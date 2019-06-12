import React from 'react'
import styled from 'styled-components'



class Friend extends React.Component {

    deleteFriend = e => {
        console.log(this.props.friend.id)
        e.preventDefault();
        this.props.deleteFriend(this.props.friend.id)
    }

    render(){
        return (
            <>
                <FriendDiv>
                    <FriendSpan>Name: {this.props.friend.name}</FriendSpan>
                    <FriendSpan>Age: {this.props.friend.age}</FriendSpan>
                    <FriendSpan>Email: {this.props.friend.email}</FriendSpan>
                </FriendDiv>
                <UpdateButton onClick = {() => this.props.updateForm(this.props.friend)}>Update</UpdateButton>
                <DeleteButton onClick ={(evt) => this.deleteFriend(evt)}>Delete</DeleteButton>
            </>
        )
    }
}

const FriendDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
`

const FriendSpan = styled.span`
    margin: 0.22rem 0;
`

const UpdateButton = styled.button`

`

const DeleteButton = styled(UpdateButton)`
`
export default Friend
