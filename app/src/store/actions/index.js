import React, { useEffect, useState } from "react";

import axios from "axios";

export const FETCH_SPELL_START = "FETCH_SPELL_START";
export const FETCH_SPELL_SUCCESS = "FETCH_SPELL_SUCCESS";
export const FETCH_SPELL_FAILURE = "FETCH_SPELL_FAILURE";

export const FETCH_DESC_START = "FETCH_DESC_START";
export const FETCH_DESC_SUCCESS = "FETCH_DESC_SUCCESS";



function randomNumber() {

    let random = Math.floor(Math.random() * 318)


    return random;
}


console.log(randomNumber())





/////index catcher


// axios.get(`https://www.dnd5eapi.co/api/spells/`)


//     .then(res => {
//         console.log('testinggg here', res.data.results[randomNumber()].index);

//         const index = (res.data.results[randomNumber()].index)


//         console.log(index)
//     })





export const fetchSpell = () => {
    // make an async request
    // redux-thunk allows us to return functions instead of objects
    return dispatch => {
        dispatch({ type: FETCH_SPELL_START });
        // then make the async call
        axios
            .get("https://www.dnd5eapi.co/api/spells/")
            .then(res => {
                //console.log(res.data.results);
                dispatch({ type: FETCH_SPELL_SUCCESS, payload: res.data.results[randomNumber()].name });

            })
            .catch(err => console.log(err));
    };
};



export const fetchDesc = () => {
    // make an async request
    // redux-thunk allows us to return functions instead of objects
    return dispatch => {
        dispatch({ type: FETCH_DESC_START });
        // then make the async call
        axios
            .get(`https://www.dnd5eapi.co/api/spells/acid-arrow`)
            .then(res => {
                console.log('yoo', res.data);
                dispatch({ type: FETCH_DESC_SUCCESS, payload: res.data.desc });
            })
            .catch(err => console.log(err));
    };
};


