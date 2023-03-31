import { RootState, AppDispatch } from './../store/store';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
// import { TypedUseSelectorHook } from "react-redux/es/types";
// import { useSelector } from 'react-redux/es/exports';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;