import React, { useState, useEffect } from 'react';

let url = 'https://jsonplaceholder.typicode.com/posts';

const Home = () => {
    const [ola, setOla] = useState([]);
    let getApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setOla(data);
        console.log(ola);
        // console.log(data);
        return data;
    }
    useEffect(() => {
        getApi();
    }, []);
    // let love = getApi();;
    // console.log(love);
    return (
        <div>{ola.map((x) => {
            return (
                <div key={x.id}>
                    <h1>{x.title}</h1>
                    <p>{x.body}</p>
                </div>
            )
        })}</div>
    )
}

export default Home