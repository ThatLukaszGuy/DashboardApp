import React from 'react'
import { useMoralis } from "react-moralis";
import { useEffect } from 'react';
import LogSol from '../../components/Sol/LogSol';
import NotLogSol from '../../components/Sol/NotLogSol';

export default function solLogin() {
    const {isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis()

    if(!isAuthenticated) {
        useEffect(() => {
            authenticate({
                signingMessage: "Sign to login to Dashboard",
                type: 'sol'
            })
        },[])
        
        return (
            <>



                <NotLogSol />
                
            </>
        )
    }
    return (
        <>
            <title>Sol Dashboard</title>
            <LogSol logout={logout} user={user} isLoggingOut={isLoggingOut}/>
      

        </>
    )
}