import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../services/store/reducers';

export const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
