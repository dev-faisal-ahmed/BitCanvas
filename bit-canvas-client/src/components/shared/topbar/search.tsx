import { RiSearchLine } from 'react-icons/ri';

export function Search() {
  return (
    <form className='flex items-center gap-3 rounded-md border px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary'>
      <label htmlFor=''>
        <RiSearchLine />
      </label>
      <input className='w-full outline-none' placeholder='Search...' />
    </form>
  );
}
