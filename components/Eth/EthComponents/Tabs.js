import React from "react";
import { Tab, Tabs } from '@headlessui/react'
import Profile from "./Profile";
import Balance from "./Balance";
import Transactions from "./Transactions";
import NFT from "./NFT";
import Send from "./Send";
import { useMoralis } from "react-moralis";


const TabsEl = () => {

  const {user} = useMoralis()

  return (
      <div className="w-full max-w-lg px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex p-7 space-x-1 bg-gray-900 rounded-xl text-white justify-between sm:flex-row flex-col">
          <Tab className='font-bold hover:text-pink-700'>Profile</Tab>
          <Tab className='font-bold hover:text-pink-700'>Balance</Tab>
          <Tab className='font-bold hover:text-pink-700'>Transactions</Tab>
          <Tab className='font-bold hover:text-pink-700'>NFT's</Tab>
          <Tab className='font-bold hover:text-pink-700'>Send ETH</Tab>
  
        </Tab.List>
        <Tab.Panels className="mt-2 bg-gray-900 p-7 rounded-xl text-white">
          <Tab.Panel> <Profile user={user}/> </Tab.Panel>
          <Tab.Panel> <Balance user={user}/> </Tab.Panel>
          <Tab.Panel> <Transactions user={user}/> </Tab.Panel>
          <Tab.Panel> <NFT user={user}/> </Tab.Panel>
          <Tab.Panel> <Send user={user}/> </Tab.Panel>

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