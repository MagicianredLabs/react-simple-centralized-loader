import { BehaviorSubject } from "rxjs";

const loadingSubscriber = new BehaviorSubject(false);

const LoaderService = {
    setLoader: (newValue) => {
        loadingSubscriber.next(newValue);
    }
}

export {
    LoaderService,
    loadingSubscriber
}
