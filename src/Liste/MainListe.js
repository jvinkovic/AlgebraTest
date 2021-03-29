import React from 'react';
import UsersList from './UsersList';

export default function MainListe() {
    const numbers = [5,2,3,4,5,6];

    return (
    <div>
        <ul>
            {numbers.map((elementListe, indexListe) => {
                                return (<li key={indexListe}>{elementListe}</li>); 
                            })}
        </ul>
        <UsersList></UsersList>
    </div>);
}