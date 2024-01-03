import React from 'react'
import LoginContext from '../context';
import { useContext } from 'react';

export default function Welcome1() {
    const username  = useContext(LoginContext);
  return (
    <div>Welcome {username} !!</div>
  )
}
