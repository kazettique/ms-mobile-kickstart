import { Link } from 'react-router-dom';

const gameList = [
  { name: 'AAA', logo: 'aaa' },
  { name: 'BBB', logo: 'bbb' },
  { name: 'CCC', logo: 'ccc' },
  { name: 'DDD', logo: 'ddd' },
  { name: 'EEE', logo: 'eee' },
  { name: 'FFF', logo: 'fff' },
  { name: 'GGG', logo: 'ggg' },
  // { name: 'HHH', logo: 'hhh' },
];

function Lobby() {
  return (
    <div className="bg-blue-200 grid grid-cols-2 grid-flow-row gap-0">
      {gameList.map((item) => (
        <Link key={item.name} to={`/gamePage/${item.name}`}>
          <div className="bg-amber-100 h-52 flex justify-center items-center m-3 rounded-md shadow-md">
            <div>
              <div>{item.logo}</div>
              <div>{item.name}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Lobby;
