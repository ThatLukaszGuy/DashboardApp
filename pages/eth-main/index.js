import React from 'react'
import { useMoralis } from "react-moralis";
import { useEffect } from 'react';
import NotLog from '../../components/Eth/NotLog';
import Log from '../../components/Eth/Log';
import { HeadConfig } from '../../components/Layout/HeadConfig';

export default function ethLogin() {
    const {isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis()

    const redirect = () => {
        logout;
        
    }


    if(!isAuthenticated) {
        useEffect(() => {
            authenticate({
                signingMessage: "Sign to login to Dashboard",
                type: 'evm'
            })
        },[])
        
        return (
            <>
                <NotLog />   
            </>
        )
    }
    return (
        <>
            <HeadConfig title={'Eth Dashboard'} color={'#4f545c'}/>
            

            <Log  logout={logout} user={user} isLoggingOut={isLoggingOut}/>
        </>
    )
}
