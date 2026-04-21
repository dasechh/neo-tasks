import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>HOST</h1>
      <br />
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <div>
        <img src="" alt="" />
      </div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <Outlet />
    </div>
  );
};
