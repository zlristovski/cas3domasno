import React from 'react'

export const Movies = ({ movies }) => {
    return (
        <div>
            {movies.map((movie, index) => (
                <div key={index}>
                    <h2>{movie.name}</h2>
                    <p>Release Date: {movie.date}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Plot: {movie.plot}</p>
                    <a style={{ marginBottom: "10px", display: "block" }} href={movie.imdbLink} target="_blank">IMDB Link</a>
                    <img src={movie.imgUrl} alt={movie.name} width="200" height="300" />
                    <hr />
                </div>
            ))}
        </div>
    )
}