import { useEffect } from 'react';
import useLoader from './../Hooks/useLoader';

const ComponentTwo = () => {

    const [loading, , initLoader, disableLoading, enableLoading,  ] 
        = useLoader();
  
    useEffect(() => {
        initLoader();
    }, []);

    return (<>
        <hr />
        <h1>Component 2</h1>
        {loading ? 
            <button onClick={() => disableLoading()}>Disable</button>
            : <button onClick={() => enableLoading()}>Enable</button>}
    </>)
}

export default ComponentTwo;