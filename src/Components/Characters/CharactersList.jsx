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
    const [selectedId, setSelectedId] = useState({});

    useEffect(()=>{        
        axios.get('https://rickandmortyapi.com/api/character').then((res)=>{
            let characters = res.data.results;
            let pagesCount = res.data.info.pages;
            let charactersCount = res.data.info.count;
            setCharacters(characters);
            setPagesCount(pagesCount);
            setCharactersCount(charactersCount);
            //console.log(characters);
            //console.log(res.data);
            
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

   
    const onAddToModal = (obj) => {
        setSelectedId (obj)
        console.log (obj, 'onAddToModal')
        console.log (obj.name)
    }
   

    //debugger;
    return (
        <div>
            <Modal visible={modal} setVisible={setModal} person={selectedId} >
                text
            </Modal>
            <div className={s.paginator}>
                <Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
            </div>    
            <div>
                {characters.map( c => <Characteritem key = {c.id+c.name} id={c.id}                                                                                                       
                                                     name={c.name} status={c.status} species={c.species} 
                                                     type={c.type} gender={c.gender} originName={c.origin.name}
                                                     locationName={c.location.name} image={c.image} created={c.created}
                                                     setModal={setModal} setSelectedId={setSelectedId}
                                                     onItem={(obj) => onAddToModal (obj)} />)}
            </div>
        </div>
    )
    }
    

export default CharactersList;











