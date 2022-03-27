import React from 'react';
import icon from "../assets/search.png"

type SearchBarProps = {
    search: string,
    setSearch: (val: string) => void;
    handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

const SearchBar = ({search, setSearch, handleSubmit}: SearchBarProps) => {

  return(
    <form className='form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movie" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit"><img src={icon} alt="Search Icon" /></button>
    </form>
  )
}
export default SearchBar;