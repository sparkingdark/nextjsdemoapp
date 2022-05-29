import { useState } from 'react';

async function getData(data) {
  console.log({data});
  const response = await fetch('http://localhost:5000/echo', 
    {   method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json().then(data => {
        // console.log(data);
        return data;
    });
    console.log(json);
    return json;
}

export default function Data() {
    const [data, setData] = useState('');
    const [result, setResult] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData(e.target.value);
        
    }

    const makereq = async (e) => {
        e.preventDefault();
        const res = await getData(data);
        // console.log(res);
        setResult({res:res});
    }
    
    return (
        <div>
            <form onSubmit={makereq}>
                <input type="text" onChange={handleSubmit}/>
                <button type="submit" onClick={makereq}>Submit</button>
            </form>
            <p>{data}</p>
            <p>{result.res.message}</p>
            
        </div>
    )
}