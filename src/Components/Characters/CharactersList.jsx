import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Characteritem from './CharacterItem';
import Paginator from '../common/Paginator/Paginator';
import s from './../Characters/Characters.module.scss';
import {charactersAPI} from './../../Api/api';
import Modal from '../UI/Modal/Modal';
import SelectGenderForm from '../UI/Tables/Forms/SelectForm/GenderForm/SelectGenderForm';
import SelectSpeciesForm from '../UI/Tables/Forms/SelectForm/SpeciesForm/SelectSpeciesForm';
import SelectStatusForm from '../UI/Tables/Forms/SelectForm/StatusForm/SelectStatusForm';
import Loader from '../common/Loader/Loader';



const CharactersList = () => {    

    const [characters, setCharacters] = useState ([]);
    const [pagesCount, setPagesCount] = useState(null);
    const [itemsCount, setItemsCount] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [modal, setModal] = useState (false);
    const [selectedId, setSelectedId] = useState({});
    const [onGender, setOnGender] = useState('');
    const [onSpecies, setOnSpecies] = useState('');
    const [onStatus, setOnStatus] = useState('');

    useEffect(()=>{        
        axios.get('https://rickandmortyapi.com/api/character').then((res)=>{
            let characters = res.data.results;
            let pagesCount = res.data.info.pages;
            let itemsCount = res.data.info.count;
            setCharacters(characters);
            setPagesCount(pagesCount);
            setItemsCount(itemsCount);
            if (characters.length > 0) {
                setIsLoading(false)
              }  else {
                return null}
            
        })
    },[]);

    const onPageChanged = async (pageNumber) => { 
        
        try {
        charactersAPI.getCharacters (pageNumber).then ( (res) => {
            let characters = res.data.results;
            setCharacters (characters);           
            setCurrentPage (pageNumber);                       
        })  
        } catch (err) {
        console.log(err)
    }};
   
    const onAddToModal = (obj) => {
        setSelectedId (obj)
    }

    const onSelectGender = (e) => {
        let gender = e.target.value;
        charactersAPI.getGender (gender).then ( (res) => {
            let characters = res.data.results;
            let pagesCount = res.data.info.pages;
            setCharacters (characters);      
            setPagesCount(pagesCount);     
        })
    }

    const onSelectSpecies = (e) => {
        let species = e.target.value;
        charactersAPI.getSpecies (species).then ( (res) => {
            let characters = res.data.results;
            let pagesCount = res.data.info.pages;
            setCharacters (characters);      
            setPagesCount(pagesCount);     
        })
    }

    const onSelectStatus = (e) => {
        let status = e.target.value;
     
        setOnStatus (status);
        charactersAPI.getStatus (status).then ( (res) => {
            let characters = res.data.results;
            let pagesCount = res.data.info.pages;
            setCharacters (characters);      
            setPagesCount(pagesCount);     
        })
    }  


    return (
        <div>
            <Modal visible={modal} setVisible={setModal} person={selectedId} >
                text
            </Modal>
            <div className={s.paginator}>
                <Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged} />
            </div>
            <div className={s.formsBlock}>
                <SelectGenderForm onSelectGender={onSelectGender} />
                <SelectSpeciesForm onSelectSpecies={onSelectSpecies} />
                <SelectStatusForm onSelectStatus={onSelectStatus} />
            </div>
            { isLoading ? <Loader /> :
            <div className={s.itemsBlock}>
                {characters.map( c => <Characteritem key = {c.id+c.name} id={c.id}                                                                                                       
                                                     name={c.name} status={c.status} species={c.species} 
                                                     type={c.type} gender={c.gender} originName={c.origin.name}
                                                     locationName={c.location.name} image={c.image} created={c.created}
                                                     setModal={setModal} setSelectedId={setSelectedId}
                                                     onItem={(obj) => onAddToModal (obj)} />)}
            </div>}
        </div>
    )
    }
    

export default CharactersList;











