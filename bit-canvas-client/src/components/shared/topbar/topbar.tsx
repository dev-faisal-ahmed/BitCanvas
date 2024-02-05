import { ProfileIconTopbar } from './profile-icon-topbar';
import { Logo } from './logo';
import { Search } from './search';

export function Topbar() {
  return (
    <nav className=' bg-white py-3'>
      <div className='container grid grid-cols-3 items-center'>
        <Logo />
        <Search />
        <ProfileIconTopbar
          className='ml-auto'
          name='Faisal Ahmed'
          email='faisal@gmail.com'
        />
      </div>
    </nav>
  );
}
