import React from 'react';

export default function User({korisnik, index, onDelete, onChange}) {

    return (<p>
                <b>{korisnik.ime} - {korisnik.godine}</b>
                <br />
                <input value={korisnik.ime}
                        onChange={(event) => onChange(event, index)} />
                <button onClick={() => onDelete(index)}>Obriši</button>
            </p>);
}
