import React from 'react'
import styled from 'styled-components'



class Friend extends React.Component {

    deleteFriend = e => {
        e.preventDefault();
        this.props.deleteFriend(this.props.friend.id)
    }

    render(){
        return (
            <>
                <FriendDiv>
                    <div>
                    <FriendSpan>Name: {this.props.friend.name}</FriendSpan>
                    <FriendSpan>Age: {this.props.friend.age}</FriendSpan>
                    <FriendSpan>Email: {this.props.friend.email}</FriendSpan>
                    </div>
                    <UpdateButton onClick = {() => this.props.updateForm(this.props.friend)}>Update</UpdateButton>
                <DeleteButton onClick ={(evt) => this.deleteFriend(evt)}>Delete</DeleteButton>
                </FriendDiv>
            </>
        )
    }
}

const FriendDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    width: 35%;

    div{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`

const FriendSpan = styled.span`
    font size: 20px;
    font-family: 'Oswald', sans-serif;
`

const UpdateButton = styled.button`
    height: 30px;
    background: #0B2818
    color: white;
    
    &:hover{
        background: rgba(66,94,78, 0.4);
        font-weight: 600;
        color: black;
    }
`

const DeleteButton = styled(UpdateButton)`
`
export default Friend
