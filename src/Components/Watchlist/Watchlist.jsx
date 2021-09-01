import React, { useEffect, useState } from 'react';
import WatchListTable from '../UI/Tables/WatchListTable.jsx/WatchListTable';
import { v4 as uuidv4 } from 'uuid';

const WatchList = () => {

    const [item, setItem] = useState ('');
   
    const [items, setItems] = useState (
        JSON.parse(localStorage.getItem('items')) || []
    )
    
    useEffect (()=> {        
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

   
    const addNewItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                item: item,
                complete: false
            }
            setItems ((items) => [ ...items, newItem])
            setItem ('');
        } else {
            setItem ('');
        }            
    }

    const removeItem = (id) => {           
        setItems(items.filter((item) => item.id !== id));
    }

    const onComplete = (id) => {
      
        setItems ([ ...items.map ((item) =>
            item.id === id ? { ...item, complete: !item.complete }
                           : { ...item }) ])
    }

    return (
        <div>
         
            <WatchListTable setItem={setItem} addNewItem={addNewItem} items={items} 
                            removeItem={removeItem} item={item} 
                            onComplete={onComplete} />
        </div>
    )
}

export default WatchList;