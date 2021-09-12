import React, {useState, useEffect} from 'react';
import './App.css';

function App({login}) {
    const [data, setData] = useState(null);

    useEffect(() => {
            fetch(`https://api.github.com/users/${login}`)
                .then(response => response.json())
                .then(setData);
        },[]);

    if(data) {
        return <div>
            <h1>Login: {data.login}</h1>
            <img
                alt={data.login}
                src={data.avatar_url}
                height="200"/>
        </div>
    }
    return <div>No user found.</div>;



}

export default App;
