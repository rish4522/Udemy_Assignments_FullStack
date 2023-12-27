import React from "react";
import emojipedia from "./emojipedia";

function Card(props) {
    return (
        <div className="list-item">
            <p className="list-emoji">{props.emoji}</p>
            <h1>{props.name}</h1>
            <p>{props.meaning}</p>
        </div>
    );
}

function createCard(emojipedia) {
    return (
        <Card 
            key = {emojipedia.id}
            name = {emojipedia.name}
            emoji = {emojipedia.emoji}
            meaning = {emojipedia.meaning}
        />
    );
}

function Content() {
    return (
        <div className='favList'>
            {emojipedia.map(createCard)}
        </div>
    );
}

export default Content;