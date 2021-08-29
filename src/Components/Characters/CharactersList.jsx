import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Characteritem from './CharacterItem';
import Paginator from '../common/Paginator/Paginator';
import s from './../Characters/Characters.module.scss';
import {charactersAPI} from './../../Api/api';
import Modal from '../UI/Modal/Modal';

const CharactersList = () => {    

    const [characters, setCharacters] = useState ([]);
    const [pagesCount, setPagesCount] = useState(null);
    const [charactersCount, setCharactersCount] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [modal, setModal] = useState (false);

    useEffect(()=>{        
        axios.get('https://rickandmortyapi.com/api/character').then((res)=>{
            let characters = res.data.results;
            let pagesCount = res.data.info.pages;
            let charactersCount = res.data.info.count;
            setCharacters(characters);
            setPagesCount(pagesCount);
            setCharactersCount(charactersCount);
            console.log(characters);
            console.log(res.data);
            
        })
    },[]);

    const onPageChanged = async (pageNumber) => { 
        //debugger;
        try {
        charactersAPI.getCharacters (pageNumber).then ( (res) => {
            let characters = res.data.results;
            setCharacters (characters);           
            setCurrentPage (pageNumber);                       
        })
        //setCurrentPage(pageNumber)
        } catch (err) {
        console.log(err)
    }};

    //debugger;
    return (
        <div>
            <Modal visible={modal} setVisible={setModal} />
            <div className={s.paginator}>
                <Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
            </div>    
            <div>
                {characters.map( c => <Characteritem key = {c.id} character={c}/>)}
            </div>
        </div>
    )
    }
    

export default CharactersList;











