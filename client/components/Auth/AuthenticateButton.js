import { Button } from '@chakra-ui/react';
import React from 'react';
import { useMoralis } from 'react-moralis';


export const AuthenticateButton = ({ onClick, text }) => {
  const { user, isAuthenticated } = useMoralis();

  return (
    <button className="bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-7 border border-pink-800 rounded shadow mx-3 my-2" onClick={onClick}>
      {text}
    </button>
  );
};
