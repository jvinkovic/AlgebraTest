import React from 'react';

export default function User({ user }) {
    return (<p>
        <span>{user.name}</span> ima <span>{user.age}</span>
    </p>);
}