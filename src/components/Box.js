import React, {useEffect, useState} from 'react'
import '../App.css';

function Box() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] =  useState(null);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/todos/2`)
        .then((res) => {
            if(!res.ok){
                throw new Error(
                    `this is new error`
                );
            }
            return res.json();
        })
        .then((actualData)=> {
            setData(actualData);
            setError(null);
        })
        .catch((err)=> {
            setError(err.message);
            setData(null);
        })
        .finally(()=> {
            setLoading(false);
        });

    }, []);

    return (
        <div className="box">
            {loading && <div>loading...</div>}
            {error && (
                <div>  {`There is an error`} </div>
            )}
            {data &&
            
            <div key={data.id} className="box_inner">
                <h2>{data.title}</h2>
            </div>
            }
        </div>
    )
}

export default Box
