import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import Favorite from './Favorite';
import Lobby from './Lobby';

function MainPage() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col">
      <div className="w-full h-8 bg-slate-400 flex items-center justify-center shrink-0">
        <div>icon</div>
        <div className="flex-grow bg-gray-600 text-center text-gray-50 overflow-hidden">hello marquee</div>
        <Menu />
      </div>
      <div className="grow overflow-scroll">
        <div className="bg-gray-300 h-24 w-full flex items-center justify-center shrink-0">logo</div>
        <div className="w-full flex">
          <NavLink
            className={({ isActive }) => `w-1/2 p-2 text-center ${isActive ? 'bg-green-200' : 'bg-green-100'}`}
            to="lobby"
          >
            Lobby
          </NavLink>
          <NavLink
            className={({ isActive }) => `w-1/2 p-2 text-center ${isActive ? 'bg-green-200' : 'bg-green-100'}`}
            to="favorite"
          >
            Favorite
          </NavLink>
        </div>

        <Routes>
          <Route index element={<Lobby />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
