import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import React from "react"

const Feed = () => {
    const [articles, setAttribute] = useState([])
    const [period] = useState('30')

  useEffect(() =>{

    const fetchArticles = async() => {
     
      try {
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`)

        const articles = await response.json()
        //console.log(articles.results);
        setAttribute(articles.results);
            
      } catch (error) {
        console.error(error);
      }
    }
    fetchArticles()
  },[])
    return (
        <div>
            <div className='grid grid-cols-1 gap-10 px-5 pt-10 pb-20 justify-content:left'>
      {articles.map((articles) =>{
          const {abstract, title, byline,  section, source, id, url} = articles

          return(
            <article key={id} className='bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto'>
              <h2 className='font-bold text-1xl mb-2 lg:text-2xl'>{title}</h2>
              <p>{abstract}</p>
              <p>{byline}</p>
              <p> <span className='font-bold'>Section: </span>{section}</p>
              <p > <span className='font-bold'>Source: </span>{source}</p>
              <Button href={url} target="_blank" variant="contained">Source Link</Button>

            </article>
          )
        })}
      
        
      </div>
        </div>
    )
}

export default Feed
