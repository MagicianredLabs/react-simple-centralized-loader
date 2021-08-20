import { useState } from "react";
import { loadingSubscriber } from './../Services/LoaderService';

const useLoader = (initLoading = false) => {

    const [ loading, setLoading ] = useState(initLoading);

    const initLoader = () => {        
      loadingSubscriber.subscribe((value) => {
        setLoading(value);
      });
    }
    
    const disableLoading = () => {
        loadingSubscriber.next(false);
    }
    const enableLoading = () => {
        loadingSubscriber.next(true);
    }

    const renderSpinner = () => {
        if(loading) {
            return <div class="loader">loading...</div>;
        }
    }

    return [loading, setLoading, initLoader, disableLoading, enableLoading, renderSpinner ];
}

export default useLoader;