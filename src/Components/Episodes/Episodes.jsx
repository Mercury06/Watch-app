import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodesTable from '../UI/Tables/EpisodesTable/EpisodesTable';
import Paginator from '../common/Paginator/Paginator';
import s from './../common/Paginator/Paginator.module.scss';
import { episodesAPI } from '../../Api/api';
import Loader from '../common/Loader/Loader';



const Episodes = () => {

  const [episodes, setEpisodes] = useState ([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect (()=>{        
    axios.get('https://rickandmortyapi.com/api/episode').then((res)=>{
        
        let episodes = res.data.results;
        let pagesCount = res.data.info.pages;

        if (episodes.length > 0) {
          setIsLoading(false)
        }  else {
          return null}
        
        setEpisodes(episodes);
        setPagesCount(pagesCount);
    })
},[]);

const onPageChanged = async (pageNumber) => { 
  
  try {
  episodesAPI.getEpisodes (pageNumber).then ( (res) => {
      let episodes = res.data.results;
      setEpisodes (episodes);           
      setCurrentPage (pageNumber);                       
  })
 
  } catch (err) {
  console.log(err)
}};

    return (
      <div>
        <center><h3>List of episodes</h3></center>
        <div className={s.paginator}>
                <center><Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/></center>
        </div> 
        { isLoading ? <Loader /> :
        <EpisodesTable episodes={episodes} />}
        
      </div>
    )
}

export default Episodes;