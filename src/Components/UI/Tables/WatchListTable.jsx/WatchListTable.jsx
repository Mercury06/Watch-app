import React from 'react';
import { RemoveIcon } from '../../Icons/Boxicons';



const WatchListTable = ({ setItem, removeItem, addNewItem, items, item, onComplete }) => {
 
    return (
        <div> 
            <section className="vh-100" >          
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card" >        
          <div className="card-body p-5">
            <h6 className="mb-3">Add some episodes to  watch list </h6> 
            
            <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg text-warning"></i></a>

            <form className="d-flex justify-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <input type="text" form="form1" value={item} placeholder="Enter something..." className="form-control form-control-lg" 
                       onChange={(e) => setItem (e.target.value)}  />
                
              </div>
              <button type="button" className="btn btn-primary btn-lg ms-2" onClick={addNewItem} >Add</button>
            </form>

            
            <ul className="list-group mb-0">
            { items.map (( i ) => { 
                return (
              <li  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className={ i.complete ? "formChecked formOnChecked" : "formChecked"} id="scales" type="checkbox" 
                        onChange={() => onComplete (i.id)} value="" />                           
                        
                    <label for="scales" className="labelCl" >	{i.item} </label>  
    
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item" onClick={() => removeItem(i.id)}><RemoveIcon /></a>
              </li>)
            })}
            </ul>  

              
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


        </div>  )}

export default WatchListTable;