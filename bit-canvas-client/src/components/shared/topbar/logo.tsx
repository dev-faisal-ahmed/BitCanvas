import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to={'/'} className='logo text-primary-700 text-3xl'>
      <span>Bit</span> <span>Canvas</span>
    </Link>
  );
}
