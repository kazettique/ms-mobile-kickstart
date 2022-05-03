import { useState } from 'react';

function Menu({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsMenuOpen(true)}>menu</div>
      <div
        className={`w-screen h-screen bg-blue-200 flex justify-center items-center fixed top-0 transition-all z-10 ${
          isMenuOpen ? 'left-0' : 'left-full'
        }`}
      >
        this is menu
        <button className="bg-blue-400 p-1 absolute top-0 right-0" onClick={() => setIsMenuOpen(false)}>
          X
        </button>
      </div>
    </>
  );
}

export default Menu;
