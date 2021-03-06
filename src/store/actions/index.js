export {
  getStripsRequest,
  getStripRequest,
  sortedStripsStartLowPrice,
  sortedStripsStartHighPrice,
  sortedStripsStartHighPower,
  sortedStripsStartLowPower,
  filteredTwelveVolts,
  filteredTwentyFourVolts,
  filteredWarmLight,
  filteredNeutralLight,
  filteredColdLight,
  setNewComment,
  sendNewRatingNumberAction,
  setFoundStripsAC
} from './stripsAction';

export {
  toggleIsLoading,
  clearError,
  setErrorAction,
  toggleIsWaitGetStrip,
  toggleIsShowBackdrop,
  openSideDrawer,
  toggleIsShowSideDrawer,
  closeAllModals,
  toggleIsWaitSort,
  toggleIsWaitGetNewComment,
  toggleIsShowSortList,
  toggleIsShowFilterList,
  toggleIsShowOrderSuccessModal,
  toggleIsWaitSendOrderData,
  setError,
  toggleIsWaitSendNewRatingNumber,
  toggleIsShowSearchBox
} from './UIAction';

export {
  addToBagProductStart,
  getProductsFromLS,
  increasedMetersAndPrice,
  decreasedMetersAndPrice,
  deleteElementFromBag,
  deleteElementFromBagStart,
  clearBag,
  sendOrderStartProgress
} from './bagAction';