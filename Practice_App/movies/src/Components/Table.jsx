import React from "react";
//import Getmovies from "./Getmovies";

const Table = (movies) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Thalapathy Movies
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {movies.map((film,i) => <tr key={i}>
                    <td>{film}</td>
                  </tr>)}
                </tbody>
            </table>
        </div>
    );

};
export default Table;