import React, { useState } from 'react';
import Card from '../components/Card';
// import axios, { AxiosResponse } from 'axios';
import SearchBar from '../components/SearchBar';
import services from '../services/apiCalls';

const Home = () => {
  const [search, setSearch] = useState<string>("");

  interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
  }

  const [data, setData] = useState<Movie[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const dataRetrieved = await services.getSearch(search);
      setData(dataRetrieved.results);
      setSearch("")
    }catch(e){
      console.log(e)
    }
  }

  return(
      <section className='home'>
          <div className='top'>
            <h1 className='topTitle'>
                Movie Surf
            </h1>
            <SearchBar search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
            {
              data.length !== 0 ?
              data.map((movie: object) => <Card movie={movie} />):
              ""
            }
          </div>
      </section>
  )
}
export default Home;