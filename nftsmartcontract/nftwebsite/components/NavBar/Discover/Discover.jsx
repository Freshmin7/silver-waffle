import React from 'react'
import Link from 'next/link';

// Internal import
import Style from './Discover.module.css';

const Discover = () => {
  // -- Discover Navigation menu
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
  ]
  return (
    <div>
      {discover.map((el, i)=> (
        <div key={i+1} className={Style.discover}>
          <Link href={{pathname: `${el.link}`}}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Discover