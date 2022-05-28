import React from 'react'
import {  BsFillFileEarmarkFill } from 'react-icons/bs';
import {  FaEthereum , FaPhone } from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai'
import {RiMoneyDollarCircleFill , RiQuestionnaireFill, RiMistLine} from 'react-icons/ri'
import Link from 'next/link'


export default function Sidebar() {



    const SideBarIcon = ({ icon, text  }) => (
        <div className="sidebar-icon group" >
          {icon}
          <span className="sidebar-tooltip group-hover:scale-100">
            {text}
          </span>
        </div>
        )

        const Divider = () => <hr className="sidebar-hr" />;

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                   bg-gray-900 shadow-lg z-10">
        <Link href="#">
          <a>
            <SideBarIcon icon={<AiFillHome size="28" />} text='Home'/>
          </a>
        </Link>
        <Divider />
        <Link href="#login">
          <a>
            <SideBarIcon icon={<FaEthereum size="32" />} text='Log in with MetaMask or Phantom' />
          </a>
        </Link>
        
        <Link href="#other">
          <a>
            <SideBarIcon icon={<RiMistLine size="20" />} text='Check out some other cool things here' />
          </a>
        </Link>

        <Link href="#about">
          <a>
            <SideBarIcon icon={<RiQuestionnaireFill size="20" />} text="About this page"/>
          </a>
        </Link>
        
        <Link href={'/contact'}>
          <a>
            <SideBarIcon icon={<FaPhone size="20" />} text="Contact me"/>
          </a>
        </Link>

        <Link href='https://dapplinktree.herokuapp.com/' >
          <a target='_blank'>
            <SideBarIcon icon={<RiMoneyDollarCircleFill size="20" />}  text="Check out my other dapps here!"/>
          </a>
        </Link>
        <Divider />
        <Link href='https://github.com/ThatLukaszGuy/DashboardApp' >
          <a target='_blank'>
            <SideBarIcon icon={<BsFillFileEarmarkFill />} size="22" text='Source Code' />
          </a>
        </Link>
    </div>
  );
  }



