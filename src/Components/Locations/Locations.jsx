import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paginator from '../common/Paginator/Paginator';
import s from './../common/Paginator/Paginator.module.scss';
import { locationsAPI} from '../../Api/api';
import Loader from './../common/Loader/Loader';
import LocationsTable from '../UI/Tables/LocationsTable/LocationsTable';
import SelectTypeForm from '../UI/Tables/Forms/SelectForm/TypeForm/SelectTypeForm';
import SelectDimForm from '../UI/Tables/Forms/SelectForm/DimForm/SelectDimForm';



const Locations = () => {

    const [locations, setLocations] = useState ([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(null);
    const [locationsCount, setLocationsCount] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [onType, setOnType] = useState('');
    const [onDimension, setOnDimension] = useState('');

    useEffect (()=>{        
        axios.get('https://rickandmortyapi.com/api/location').then((res)=>{
            
            let locations = res.data.results;
            let pagesCount = res.data.info.pages;  
            let locationsCount = res.data.info.count;  
             
            setLocations(locations);
            setPagesCount(pagesCount);
            setLocationsCount(locations)

            if (locations.length > 0) {
                setIsLoading(false)
              }  else {
                return null}            
            
        })
    },[]);

    const onPageChanged = async (pageNumber) => { 
        
        try {
            locationsAPI.getLocations (pageNumber).then ( (res) => {
            let locations = res.data.results;
            setLocations (locations);           
            setCurrentPage (pageNumber);                       
        })
       
        } catch (err) {
        console.log(err)
      }};

     
    const onSelectType = (e) => {
      
        let type = e.target.value;
        setOnType (type);
        locationsAPI.getType (type).then ( (res) => {
            let locations = res.data.results;
            let pagesCount = res.data.info.pages;
            setLocations (locations);      
            setPagesCount(pagesCount);     
        })
    }

    const onSelectDimension = (e) => {       
        
        let dimension = e.target.value;
        setOnDimension (dimension);
        locationsAPI.getDimension (dimension).then ( (res) => {
            let locations = res.data.results;
            let pagesCount = res.data.info.pages;
            setLocations (locations);      
            setPagesCount(pagesCount);     
        })
    }

    return (
        <div>
           
            <center><h3>List of locations</h3></center>
            <div className={s.paginator}>
                <center><Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/></center>
            </div> 
            <div className={s.formsBlock}>
                <SelectTypeForm onSelectType={onSelectType} onType={onType} />
                <SelectDimForm onSelectDimension={onSelectDimension} />
            </div>    
            { isLoading ? <Loader /> :
            <LocationsTable locations={locations} />}
        </div>
    )
    
}

export default Locations;

