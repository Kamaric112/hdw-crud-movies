import React from 'react';
import { useLogout } from '../hooks/useLogout';
import useSearch from '../hooks/useSearch';
import useUpdateParams from '../hooks/useUpdateParams';

function MainHeader() {
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
      <a href="/#" className="block p-4 text-white font-bold">
        Movie
      </a>

      <div className="flex items-center justify-center ">
        <div className="flex border-2 rounded">
          <input
            type="text"
            className="px-4 py-2 w-56  text-gray-800"
            placeholder={searchQuery}
            onChange={handleQuery}
          />
          <button className="px-4 text-white bg-gray-600 border-l ">Search</button>
        </div>
      </div>

      <button className="flex justify-center items-center gap-4 mr-10" onClick={logout}>
        {' '}
        Logout
      </button>
    </div>
  );
}

export default MainHeader;
