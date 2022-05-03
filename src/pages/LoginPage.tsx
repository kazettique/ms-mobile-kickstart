import { Link } from 'react-router-dom';

function LoginPage({}) {
  return (
    <div className="w-screen h-screen bg-lime-100 flex justify-center items-center text-4xl">
      <div>
        <div>LoginPage</div>

        <Link to="/mainPage" className="bg-lime-300 p-2 m-2 block text-center">
          Login
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
