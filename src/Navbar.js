import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const walletConnect = async () => {
    console.log('Requesting Account');

    //check if metamsk extention exist
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error Connecting ...');
      }
    } else {
      console.log('Metamask not detected');
    }
  };
  return (
    <>
      <nav className='navbar'>
        <div className='left_nav'>
          <Link to='/' className='nav-link'>
            <img
              className='logo'
              // src={require("./edgeXgame-logos_transparent.png")}
              src='./images/edgeXgame-logos_white.png'
              alt=''
            />
          </Link>
        </div>
        <div className='right_nav'>
          <button className='home btn'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </button>
          <button className='buy btn'>
            <Link to='/buy' className='nav-link'>
              Buy
            </Link>
          </button>
          <button className='about btn'>
            <Link to='/aboutus' className='nav-link'>
              About Us
            </Link>
          </button>
          <button
            className='connect_wallet btn_connect_wallet'
            onClick={walletConnect}
          >
            {walletAddress
              ? `${walletAddress.substring(0, 16)}...`
              : 'Connect Wallet'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
