import { combineReducers } from '@reduxjs/toolkit';

import { homeReducer } from '../slices/home';

const collectedReducer = combineReducers({
  home: homeReducer,
});

export default collectedReducer;
