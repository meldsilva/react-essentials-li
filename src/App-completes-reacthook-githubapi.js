import React, {useState, useEffect} from 'react';
import './App.css';

function App({login}) {
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!login) {
            return;
        }
        setloading(true);

        fetch(`https://api.github.com/users/${login}`)
                .then(response => response.json())
                .then(setData)
                .then( ()=>setloading(false) )
                .catch(setError())
        },[login]);

        if(loading) return <h1 style={ {color: "magenta" } }>Loading...</h1>;
        if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
        if(!data) return null;
        
        return <div>
            <h2 style={ {color: "#844BA1"}}>Login: {data.login}</h2>
            <h2 style={ {color: "#4EB7B7"}}>Location: {data.location}</h2>
            <img
                alt={data.login}
                src={data.avatar_url}
                height="200"/>
        </div>
}
export default App;
