import React from 'react'
import { useMoralis } from "react-moralis";
import { useEffect,useState } from 'react';
import NotLog from '../../components/Eth/NotLog';
import Log from '../../components/Eth/Log';
import { HeadConfig } from '../../components/Layout/HeadConfig';
import Moralis from 'moralis-v1';
export default function ethLogin() {
    const {isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis()

    const redirect = () => {
        logout;
        
    }


    if(!isAuthenticated) {
        return (
            <>
                <NotLog />   
            </>
        )
    }
    return (
        <>
            <HeadConfig title={'Eth Dashboard'} color={'#4f545c'}/>
            

            <Log  user={user}/>
        </>
    )
}
