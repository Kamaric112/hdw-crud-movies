import React, { SetStateAction } from 'react';
import { useLogout } from '../hooks/useLogout';
import useSearch from '../hooks/useSearch';
import useUpdateParams from '../hooks/useUpdateParams';
import MenuIc from './Icons/MenuIc';

function MainHeader({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<SetStateAction<boolean>> }) {
  const { searchQuery, setSearchValue } = useSearch();
  const { logout } = useLogout();
  const { updatePageParam, updateSearchParam } = useUpdateParams();

  async function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    updatePageParam(1);
    updateSearchParam(searchQuery);
  }

  return (
    <div className="bg-gray-800 text-gray-100 flex justify-between w-full ">
      <div className="block p-4 text-white font-bold md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {' '}
        <MenuIc />
      </div>
      <a href="/#" className=" p-4 text-white font-bold hidden md:block">
        Movie
      </a>

      <input className="w-auto border-2 rounded " type="text" placeholder={searchQuery} onChange={handleQuery} />

      <button className="text-center mr-4" onClick={logout}>
        {' '}
        Logout
      </button>
    </div>
  );
}

export default MainHeader;
