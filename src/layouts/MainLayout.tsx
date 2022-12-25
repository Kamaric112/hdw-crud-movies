import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CloseIc from '../components/Icons/closeIc';
import MainHeader from '../components/MainHeader';
import SideBar from '../components/SideBar';

function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative min-h-screen h-full w-full md:flex bg-indigo-50">
      <div
        className={`bg-[#262626] text-blue-100 w-64 space-y-6 px-2  absolute inset-y-0 left-0 transform md:relative  transition duration-200 ease-in-out z-10 md:translate-x-0   ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div onClick={() => setIsOpen(!isOpen)} className=" justify-end items-center flex md:hidden">
          <CloseIc />
        </div>
        <SideBar />
      </div>
      <div className="flex-1  text-2x1 font-bold flex flex-col justify-between items-center">
        <MainHeader isOpen={isOpen} setIsOpen={setIsOpen} />

        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
