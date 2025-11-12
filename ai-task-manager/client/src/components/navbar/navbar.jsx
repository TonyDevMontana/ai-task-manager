import { UserIcon } from 'lucide-react';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className='bg-slate-900 h-20 flex justify-around items-center'>
      <div className='text-white font-semibold'>Task Manager App</div>

      <div className=''>
        <UserIcon size={30} className='bg-white rounded-full' />
      </div>
    </nav>
  );
};
