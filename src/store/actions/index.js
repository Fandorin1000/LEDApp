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
  setNewComment
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
  toggleIsWaitSort,
  toggleIsWaitGetNewComment,
  toggleIsShowSortList,
  toggleIsShowFilterList,
  toggleIsShowOrderSuccessModal,
  toggleIsWaitSendOrderData
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