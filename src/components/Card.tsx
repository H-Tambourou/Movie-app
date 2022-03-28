import React from 'react';

type CardProps = {
    movie: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    }
}

const Card = ({movie}: CardProps) => {
    const base: string = "http://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    return(
        <div className='card'>
            <div className='border'>
                <h2>{movie.title}</h2>
                <img src={base} alt={`${movie.title} Poster`} />

            </div>

        </div>
    )
}
export default Card;