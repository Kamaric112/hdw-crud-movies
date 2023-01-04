import React, { useEffect } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { fetchGenres } from '../features/genres/fetchGenres';
import { AppDispatch, RootState } from '../app/store';
import { Genres } from '../features/genres/type';
import { Link } from 'react-router-dom';
import useUpdateParams from '../hooks/useUpdateParams';
import CloseIc from './Icons/closeIc';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function SideBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const { updateGenresParam, updatePageParam } = useUpdateParams();
  const { genres } = useTypedSelector(state => state.genre);

  const handleClick = (genreId: number) => {
    updatePageParam(1);
    updateGenresParam(genreId);
  };
  return (
    <nav
      className={`bg-[#262626] text-blue-100 w-[200px] space-y-6 px-2  absolute inset-y-0 left-0 transform md:fixed  transition duration-200 ease-in-out z-10 md:translate-x-0   ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className=" justify-end items-center flex md:hidden">
        <CloseIc />
      </div>
      <Link
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        to="/watch"
      >
        WatchList
      </Link>
      {genres.map((genre: Genres) => (
        <div
          className="flex items-center  gap-4 py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          key={genre.id}
        >
          <img src={`/genres/${genre.name.toLowerCase()}.png`} height={40} width={40} />

          <div onClick={() => handleClick(genre.id)}>{genre.name}</div>
        </div>
      ))}
    </nav>
  );
}

export default SideBar;
