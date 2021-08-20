import { useEffect } from 'react';
import useLoader from './../Hooks/useLoader';

const ComponentOne = () => {

    const [loading, , initLoader, disableLoading, enableLoading,  ] = useLoader();

    useEffect(() => {
        initLoader();
    }, []);

    return (<>
        <h1>Component 1</h1>
        {loading ? 
            <button onClick={() => disableLoading()}>Disable</button>
            : <button onClick={() => enableLoading()}>Enable</button>}
    </>)
}

export default ComponentOne;