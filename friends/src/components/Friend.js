import React from 'react'
import styled from 'styled-components'

const Friend = props => {
    return (
        <FriendDiv>
            <FriendSpan>Name: {props.data.name}</FriendSpan>
            <FriendSpan>Age: {props.data.age}</FriendSpan>
            <FriendSpan>Email: {props.data.email}</FriendSpan>
        </FriendDiv>
    )
}

const FriendDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
`

const FriendSpan = styled.span`
    margin: 0.22rem 0;
`
export default Friend
