import React from 'react';

export default function NewUser({onUserAdded}) {
    const [ nameIzStatea, setNameIzStatea ] = React.useState('');
    const [ ageIzStatea, setAgeIzStatea ] = React.useState(0);

    const handleForm = (e) => {
        e.preventDefault();

        if(nameIzStatea.length < 3 || ageIzStatea <= 0) {
            return;
        }

        const ageKaoBroj = parseInt(ageIzStatea);
        const noviUser = {
            name: nameIzStatea,
            age: ageKaoBroj
        };        
        onUserAdded(noviUser);

        setNameIzStatea('');
        setAgeIzStatea(0);
    }
    
    const handleNameChange = (e) => {
        setNameIzStatea(e.target.value.trim());
    }

    const handleAgeChange = (e) => {
        setAgeIzStatea(e.target.value);
    }

    return (<form onSubmit={handleForm}>
                <input value={nameIzStatea} onChange={handleNameChange} placeholder="ovdje ide ime po želji" type="text" />
                <input value={ageIzStatea} onChange={handleAgeChange} type="number" />
                <input type="submit" value="Dodaj" />
            </form>);
}