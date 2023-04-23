import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon,XIcon } from '@heroicons/react/solid';
import AuthModal from './AuthModal';
import SearchBar from './SeachBar';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <>
    <nav className="bg-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h className="text-white font-bold text-xl">SMITESH AROLKAR</h>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
               
              <Link href="/">
                <h className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                <i className="fa-solid fa-house"></i> Home</h>
              </Link>
              <Link href="/about">
                <h className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                <i className="fa-solid fa-info"></i> About</h>
              </Link>
              <Link href="/contact">
                <h className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                <i className="fa-solid fa-phone"></i> Contact</h>
              </Link>
              <AuthModal/>
              <SearchBar/>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <SearchBar/>
            <Link href="/">
            
              <h className="text-white hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><i class="fa-solid fa-home mx-1"></i> Home</h>
            </Link>
            <Link href="/">
           
              <h className="text-white hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><i class="fa-solid fa-info mx-1"></i> About</h>
            </Link>
            <Link href="/">
            
              <h className="text-white hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium "><i class="fa-solid fa-phone mx-1"></i> Contact</h>
            </Link>
            <AuthModal></AuthModal>
          </div>
        </div>
      )}


  
    </nav>
    </>
  );
};

export default Navbar;
