import React from 'react';

export const CreateEmployee = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='font-bold italic text-lg'>CreateEmployee</h1>

      <input
        type='text'
        placeholder='Enter Username'
        className='border p-2 rounded outline-none'
      />
      <input
        type='email'
        placeholder='Enter Email'
        className='border p-2 rounded outline-none'
      />
      <div>
        <input
          type='text'
          placeholder='Enter skills'
          className='border p-2 rounded outline-none w-42'
        />
        <button className='ml-4 bg-green-800 text-white text-xs p-2 rounded'>
          Add skills
        </button>
      </div>

      <button className='bg-slate-900 text-white rounded-lg p-3 cursor-pointer'>
        Create employee
      </button>
    </div>
  );
};
