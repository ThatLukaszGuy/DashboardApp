import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { useMoralis } from 'react-moralis';
  import Moralis from 'moralis-v1';

  
  export const AuthenticateModal = ({ isOpen, onClose }) => {
    const { authenticate, enableWeb3 } = useMoralis();
  
    const [authError, setAuthError] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
  
    /**
     * 1) Connect to a Evm
     * 2) Request message to sign using the Moralis Auth Api of moralis (handled on server)
     * 3) Login via parse using the signed message (verification handled on server via Moralis Auth Api)
     * : 'metamask' | 'walletconnect' | 'magicLink' | 'web3Auth' = 'metamask' 
    */ 
    const handleAuth = async (provider) => {
      try {
        setAuthError(null);
        setIsAuthenticating(true);
  
        // Enable web3 to get user address and chain
        await enableWeb3({ throwOnError: true, provider });
        const { account, chainId } = Moralis;
  
        if (!account) {
          throw new Error('Connecting to chain failed, as no connected account was found');
        }
        if (!chainId) {
          throw new Error('Connecting to chain failed, as no connected chain was found');
        }
  
        // Get message to sign from the auth api
        const { message } = await Moralis.Cloud.run('requestMessage', {
          address: account,
          chain: parseInt(chainId, 16),
          networkType: 'evm',
        });
  
        // Authenticate and login via parse
        await authenticate({
          signingMessage: message,
          throwOnError: true,
        });
        onClose();
      } catch (error) {
        setAuthError(error);
      } finally {
        setIsAuthenticating(false);
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background='customGray.900' >
          <ModalHeader color={'gray.100'}>Web3 Authentication</ModalHeader>
          {/* Add paragraph regarding metamask window not showing up*/}
          <ModalCloseButton color={'gray.100'} />
          <ModalBody>
            {authError && (
              <Alert my={3} status="error">
                <AlertIcon />
                <AlertTitle>Error: {authError.name}</AlertTitle>
                <AlertDescription>{authError.message}</AlertDescription>
              </Alert>
            )}
            <VStack alignItems="stretch" pb={3}>
              <Button colorScheme={'tailwindPink'} onClick={() => handleAuth('metamask')} disabled={isAuthenticating}>
                Metamask
              </Button>
            
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };