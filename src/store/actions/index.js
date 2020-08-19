export {
  getStripsRequest,
  getStripRequest,
  sortedStripsStartLowPrice,
  sortedStripsStartHighPrice,
  sortedStripsStartHighPower,
  sortedStripsStartLowPower
} from './stripsAction';

export {
  toggleIsLoading,
  clearError,
  setError,
  toggleIsWaitGetStrip,
  toggleIsShowBackdrop,
  openSideDrawer,
  toggleIsShowSideDrawer,
  closeAllModals,
  toggleIsWaitSort
} from './UIAction';

export {
  addToBagProductStart,
  getProductsFromLS,
  increasedMetersAndPrice,
  decreasedMetersAndPrice,
  deleteElementFromBag,
  deleteElementFromBagStart
} from './bagAction';