import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EpisodesTable = ({episodes, ...props}) => {
    return (
        <div className="container">
          
          <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>air_date</th>
                <th>episode</th>
                <th>created</th>
            </tr>
        </thead>
        <tbody>
            { episodes.map (item =>(
                <tr key={item.id+item.episode}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.air_date}</td>
                    <td>{item.episode}</td>
                    <td>{item.created}</td>
                </tr>
            ))}
        </tbody>
    </table>          
      </div>
    )
}

export default EpisodesTable;