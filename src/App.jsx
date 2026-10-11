import React from 'react'
import { Movies } from './components/Movies'

export function App() {

  let movies = [
    { 
      name: "Inception", date: "2010-07-16", genre: "Sci-Fi", 
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." , 
      imdbLink: "https://www.imdb.com/title/tt1375666/" , 
      imgUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"  
    },
    {
      name: "Pulp Fiction", date: "1994-10-14", genre: "Crime", 
      plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption." , 
      imdbLink: "https://www.imdb.com/title/tt0110912/" , 
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfMTrF0VjNkqmwvx78bnmHsduvVVvWBZh1xhSE-kyHUiIOsBZvqyu9m0&s=10"  
    },
    {
      name: "The Matrix", date: "1999-03-31", genre: "Sci-Fi", 
      plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." , 
      imdbLink: "https://www.imdb.com/title/tt0133093/" , 
      imgUrl: "https://static.wikia.nocookie.net/matrix/images/5/56/The_Matrix_digital_release_cover.jpg/revision/latest?cb=20210908111245"  
    },
    {
      name: "Interstellar", date: "2014-11-07", genre: "Sci-Fi", 
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." , 
      imdbLink: "https://www.imdb.com/title/tt0816692/" , 
      imgUrl: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"  
    },
    {
      name: "The Dark Knight", date: "2008-07-18", genre: "Action", 
      plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham." , 
      imdbLink: "https://www.imdb.com/title/tt0468569/" , 
      imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"  
    }
  ];

  return (
    <div id="app">
      <Movies movies={movies} />
    </div>
  )
}