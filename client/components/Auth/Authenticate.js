import React,{useEffect} from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import { AuthenticateButton } from './AuthenticateButton';
import { AuthenticateModal } from './AuthenticateModal';
import Log from '../Eth/Log';

export const Authenticate = ({text}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, user } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
        window.location.href = '/eth-main'
    }
  }, [isAuthenticated])
  

  return (
    <>
      <AuthenticateButton onClick={onOpen} text={text} />
      <AuthenticateModal isOpen={!isAuthenticated && isOpen} onClose={onClose} />
      
    </>
  );
};
