import { configureStore } from '@reduxjs/toolkit';
import source from './source';

export default configureStore({
    reducer: {
        source: source,
    }
});
