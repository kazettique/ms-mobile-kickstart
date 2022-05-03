import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const playList = [
  { name: 'game A', component: 'A' },
  { name: 'game B', component: 'B' },
  { name: 'game C', component: 'C' },
  { name: 'game D', component: 'D' },
  { name: 'game E', component: 'E' },
  { name: 'game F', component: 'F' },
  { name: 'game G', component: 'G' },
];

const selections = Array(49)
  .fill(0)
  .map((item, index) => index + 1);

function GamePage() {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="h-full overflow-scroll flex flex-col">
      <div className="w-full">
        <div className="w-full h-8 bg-slate-400 flex items-center justify-center">
          <div>
            <Link to="/mainPage">Home</Link>
          </div>
          <div className="flex-grow text-center text-gray-50">Game Name</div>
          <Menu />
        </div>
        <div className="w-full h-16 bg-gray-50 flex justify-center items-center relative">
          <div className="absolute right-0 top-0 w-5 h-5" onClick={() => setIsShowMore((prev) => !prev)}>
            v
          </div>
          information
          <div
            className={`absolute top-full w-full bg-gray-50 shadow-md flex justify-center items-center transition-all overflow-hidden ${
              isShowMore ? 'h-28' : 'h-0'
            }`}
          >
            more info...
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex overflow-scroll">
          {playList.map((item) => (
            <Link key={item.name} to={item.component} className="shrink-0">
              <div id={item.name} className="bg-yellow-300 py-3 px-5">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full grow overflow-scroll grid grid-cols-5 grid-flow-row gap-0 bg-gray-200">
        {selections.map((item, index) => (
          <div key={index} className="p-5">
            <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center">{item}</div>
          </div>
        ))}
      </div>
      <div className="bg-white h-28 w-full flex justify-center items-center shrink-0 shadow-md">this is footer</div>
    </div>
  );
}

export default GamePage;
