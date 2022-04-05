import React from 'react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'

export default function Details({decimals, ata, amount,  mint}) {
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'left'
    } )


    return (
        <Popover>
            <Popover.Button ref={setReferenceElement} className='bg-pink-700 rounded-md p-1  hover:bg-pink-800'>More Details</Popover.Button>

            <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                <div className='bg-gray-600 rounded-md p-4 break-words mx-2' >
                    <p>Associated Token Address: {ata}</p>
                    <p>Decimals: {decimals}</p>
                    <p>Mint: {mint}</p>
                    <p>Amount: {amount}</p>
                   

                </div>
                {/* ... */}
            </Popover.Panel>
        </Popover>
  )
}
