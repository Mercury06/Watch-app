import React from 'react';

const LocationsTable = ({ locations }) => {
    return (
        <div className="container">
          
          <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>type</th>
                <th>dimension</th>
                <th>created</th>
            </tr>
        </thead>
        <tbody>
            { locations.map (item =>(
                <tr key={item.id+item.created}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.dimension}</td>
                    <td>{item.created}</td>
                </tr>
            ))}
        </tbody>
    </table>          
      </div>
    )
}

export default LocationsTable;