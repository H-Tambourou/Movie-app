import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const options:object = {
        method: 'GET',
        url: 'https://movie-database-alternative.p.rapidapi.com/',
        params: {s:search, r:'json'},
        headers: {
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
            'X-RapidAPI-Key': '0ddb910074mshb7a1dac6bfc0dbap1035abjsn60ced1e34cc5'
          }

    }
    axios.request(options)
      .then((res: AxiosResponse) => {
        const dataRetrieved = res;
        setData(dataRetrieved);
        console.log(data)
      }).catch(e => {
        console.log('there was an error',e);
      })
    setSearch("")
  }

  return(
      <section className='home'>
          <div className='top'>
            <h1 className='topTitle'>
                Movie Surf
            </h1>
            <SearchBar search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
          </div>
      </section>
  )
}
export default Home;