import React from 'react'
import { FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useWeb3Transfer } from 'react-moralis'
import Moralis from 'moralis'


export default function Send() {
  

  const [amount, setAmount] = useState(0)

  const handleChange = (value) => setAmount(value)

  const [receiver, setReceiver] = useState('')

  const {fetch, isFetching} = useWeb3Transfer({
      amount: Moralis.Units.ETH(amount),
      receiver: receiver,
      type: 'native'
  })


  const toast = useToast()

  
  return (
    <div>
      <p className='break-words'><b>Send ETH</b></p>
      <form onSubmit={async e => {
            e.preventDefault()
            await Moralis.enableWeb3()
            fetch({
                onSuccess: () =>{
                    toast({
                         title: 'ETH succesfully send',
                        description: 'Fresh eth are going to reciever wallet',
                        status: 'success',
                        duration: 9000,
                        isClosable: true

                    })
                    setReceiver('')
                },
                onError: (error) => {
                    toast({
                        title: 'ETH couldnt be transferred',
                        description:  error,
                        status: 'error',
                        duration: 9000,
                        isClosable: true
                    })
                    setReceiver('')
                }
            })
        }}>

            <FormControl mt='4'>
                <FormLabel htmlFor='amount'>
                    Amount of ETH
                </FormLabel>
                <NumberInput step={0.1} onChange={handleChange} focusBorderColor='tailwindPink.500'>
                    <NumberInputField id='amount' value={amount}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormLabel mt='4' htmlFor='receiver'>Send to</FormLabel>
            <Input id='receiver' type='text' placeholder='Receiver address' value={receiver} onChange={e => setReceiver(e.target.value)} focusBorderColor='tailwindPink.500'/>
            
            <button className="mt-4 flex-shrink-0 bg-pink-700 hover:bg-pink-800 border-pink-700 hover:border-pink-800 text-sm border-4 text-white py-1 px-2 rounded" type="submit" disabled={isFetching}>
                 Send !
            </button>
        </form>


    </div>
  )
}
