import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { useMoralis } from 'react-moralis'
import Profile from "./Profile";
import Balance from "./Balance";
import Transactions from "./Transactions";
import NFT from "./NFT";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  const { user } = useMoralis()

  return (
    <div className="w-full max-w-4xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-900/50 p-1">
             <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-100',
                  ' ring-opacity-80 ring-offset-2 ring-offset-pink-600 focus:outline-none focus:ring-[-1]',
                  selected
                    ? 'bg-gray-900 shadow text-pink-700'
                    : 'text-gray-300 hover:bg-white/[0.12] hover:text-gray-400'
                )
              }
            >
                Profile
            </Tab>
            <Tab
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-100',
                ' ring-opacity-80 ring-offset-2 ring-offset-pink-600 focus:outline-none focus:ring-[-1]',
                selected
                  ? 'bg-gray-900 shadow text-pink-700'
                  : 'text-gray-300 hover:bg-white/[0.12] hover:text-gray-400'
              )
            }
            >
              Balance
            </Tab>
            <Tab
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-100',
                ' ring-opacity-80 ring-offset-2 ring-offset-pink-600 focus:outline-none focus:ring-[-1]',
                selected
                  ? 'bg-gray-900 shadow text-pink-700'
                  : 'text-gray-300 hover:bg-white/[0.12] hover:text-gray-400'
              )
            }
            >
              Transactions
            </Tab>
            <Tab
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-100',
                ' ring-opacity-80 ring-offset-2 ring-offset-pink-600 focus:outline-none focus:ring-[-1]',
                selected
                  ? 'bg-gray-900 shadow text-pink-700'
                  : 'text-gray-300 hover:bg-white/[0.12] hover:text-gray-400'
              )
            }
            >
              NFT's
            </Tab>
        </Tab.List>
        <Tab.Panels className=" mt-2 bg-gray-900 p-7 rounded-xl text-white">
            <Tab.Panel> <Profile user={user}/> </Tab.Panel>
            <Tab.Panel> <Balance user={user}/> </Tab.Panel>
            <Tab.Panel> <Transactions user={user}/> </Tab.Panel>
            <Tab.Panel> <NFT user={user}/> </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}