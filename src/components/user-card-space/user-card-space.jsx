import React from 'react'
import UserCard from '../user-card/user-card';
import logo from '../../assets/image 2.png'

const UserCardSpaceComponent = () =>{
    const users = [
        {
          name: 'Pasha',
          email: 'pashalife@gmail.com',
          logo: logo,
          structure:'Marketinq',
          position:'Direktor'
        }
      ]
      return users.map((user) => (
        <UserCard user={user}/>
      ));
}

export default UserCardSpaceComponent;