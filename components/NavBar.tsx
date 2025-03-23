import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants';
import Button from './Button';

export default function NavBar() {
  return (
    <nav className="flex sticky max-container padding-container  z-30 py-2 bg-[#D9D9D9] rounded-full mt-4">
      <div className="flex items-center w-full justify-between ">
        <Link href="/">
          <h1 className='font-league font-[1000] text-3xl tracking-[-.08em]'>posturly.</h1>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex absolute left-1/2 transform -translate-x-1/2 pt-7'> 
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='text-lg font-light text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

