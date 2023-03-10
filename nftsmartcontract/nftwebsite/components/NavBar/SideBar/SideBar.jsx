import React, {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";
import {GrClose} from 'react-icons/gr';
import {TiSocialFacebook, TiSocialLinkedin, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp, TiSocialTwitter, TiSocialYoutube} from 'react-icons/ti';

//Internal Inport
import Style from './SideBar.module.css';
import image from '../../../img';
import Button from '../../Button/Button';

const SideBar = ({setOpenSideMenu}) => {
  // Use state
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {
      name : "Collection",
      link : "collection"
    },
    {
      name : "Search",
      link : "search"
    },
    {
      name : "Author Profile",
      link : "Author-profile"
    },
    {
      name : "NFT Details",
      link : "NFT details"
    },
    {
      name : "Account Settings",
      link : "account settings"
    },
    {
      name : "Connect Wallet",
      link : "connect wallet"
    },
    {
      name: "Blog",
      link : "blog"
    }
  ];
  // Help center
  const helpCenter = [
    {
      name: "About",
      link:"about"
    },
    {
      name: "Contact-Us",
      link:"contact-us"
    },
    {
      name: "Sign Up",
      link:"sign-up"
    },
    {
      name: "Subscription",
      link:"subscription"
    }
  ];

  const openDiscoverMenu = ()=> {
    if(!openDiscover) {
      setOpenDiscover(true)
    } else {
      setOpenDiscover(false)
    }
  };

  const openHelpMenu = () => {
    if(!openHelp) {
      setOpenHelp(true)
    } else {
      setOpenHelp(false)
    }
  };

  const closeSideBar =()=> {
    setOpenSideMenu(false)
  }

  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={()=> closeSideBar()}/>
      <div className={Style.sideBar_box} >
        <Image src={image.logo} alt='logo' width={150} height={150} />
        <p>
          Discover the most oustanding articles on all topic of NFT & you own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          <a href='#'>
            <TiSocialFacebook />
          </a>
          <a href='#'>
            <TiSocialLinkedin />
          </a>
          <a href='#'>
            <TiSocialTwitter />
          </a>
          <a href='#'>
            <TiSocialYoutube />
          </a>
          <a href='#'>
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div className={Style.sideBar_menu_box} onClick={()=> openDiscoverMenu()}>
          <p>Discover</p>
          <TiArrowSortedDown />
        </div>
        {
          openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el,i)=> (
                <p key={i+1}>
                  <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                </p>
              ))}
            </div>
          )
        }
      </div>
      <div>
        <div className={Style.sideBar_menu_box} onClick={()=> openHelpMenu()}>
          <p>Help Center</p>
          <TiArrowSortedDown />
        </div>
        
          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el,i)=> (
                <p key={i+1}>
                  <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={Style.sideBar_button}>
          <Button btnName="Create" />
          <Button btnName="Connect wallet" />
          
        </div>
      </div>
      
       
    
  );
};

export default SideBar