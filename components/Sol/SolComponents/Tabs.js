import React from "react";
import { Tab, Tabs } from '@headlessui/react'
import { useMoralis } from "react-moralis";
import SolBalance from "./SolBalance";
import SplTokens from "./SplTokens";
import SolNFT from "./SolNFT";


const TabsEl = () => {

  const {user} = useMoralis()

  return (
      <div className="w-full max-w-lg px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex p-7 space-x-1 bg-gray-900 rounded-xl text-white justify-between sm:flex-row flex-col">
          <Tab className='font-bold hover:text-pink-700'>Balance</Tab>
          <Tab className='font-bold hover:text-pink-700'>SPL Tokens</Tab>
          <Tab className='font-bold hover:text-pink-700'>NFT's</Tab>
  
        </Tab.List>
        <Tab.Panels className="mt-2 bg-gray-900 p-7 rounded-xl text-white">
          <Tab.Panel> <SolBalance user={user}/> </Tab.Panel>
          <Tab.Panel> <SplTokens user={user}/> </Tab.Panel>
          <Tab.Panel> <SolNFT user={user} /> </Tab.Panel>


        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default function TabsRender() {
  return (
    <>
      <TabsEl />
    </>
  );
}