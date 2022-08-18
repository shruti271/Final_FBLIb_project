// export const LOAD_SAVED_ADS_IDS_LOCAL = "LOAD_SAVED_ADS_IDS_LOCAL";
export const ADD_SAVED_ADS_IDS_LOCAL = "ADD_SAVED_ADS_IDS_LOCAL";
// export const REMOVE_SAVED_ADS_IDS_LOCAL = "REMOVE_SAVED_ADS_IDS_LOCAL";

// export const ADD_TO_SAVED_ADS_START = "ADD_TO_SAVED_ADS_START";
// export const ADD_TO_SAVED_ADS_SUCCESS = "ADD_TO_SAVED_ADS_SUCCESS";
export const ADD_TO_SAVED_ADS_ERROR = "ADD_TO_SAVED_ADS_ERROR";

// export const REMOVED_FROM_SAVED_ADS_START = "REMOVED_FROM_SAVED_ADS_START";
// export const REMOVED_FROM_SAVED_ADS_SUCCESS = "REMOVED_FROM_SAVED_ADS_SUCCESS";
// export const REMOVED_FROM_SAVED_ADS_ERROR = "REMOVED_FROM_SAVED_ADS_ERROR";

export const ADD_TO_SKIPED_SAVED_FILTERED_AD = "ADD_TO_SKIPED_SAVED_FILTERED_AD";
export const REMOVE_FROM_SKIPED_SAVED_FILTERED_AD = "REMOVE_FROM_SKIPED_SAVED_FILTERED_AD";

export const addToSkipedSavedFilteredAds = (adId) => ({
  type: ADD_TO_SKIPED_SAVED_FILTERED_AD,
  payload: adId,
});

export const removeFromSkipedSavedFilteredAds = (adId) => ({
  type: REMOVE_FROM_SKIPED_SAVED_FILTERED_AD,
  payload: adId,
});

// export const loadSavedAdsIdsLocal = (savedAdsIds) => ({
//   type: LOAD_SAVED_ADS_IDS_LOCAL,
//   payload: savedAdsIds,
// });

export const addSavedAdsIdsLocal = (adIdToBeAdded) => ({
  type: ADD_SAVED_ADS_IDS_LOCAL,
  payload: adIdToBeAdded,
});//done remove

// export const removeSavedAdsIdsLocal = (adIdToBeRemoved) => ({
//   type: REMOVE_SAVED_ADS_IDS_LOCAL,
//   payload: adIdToBeRemoved,
// });//done remove //remove id from save

// export const addToSavedAdsStart = (request) => ({
//   type: ADD_TO_SAVED_ADS_START,
//   payload: request,
// });//done

// export const addToSavedAdsSuccess = (filteredSavedAds) => ({
//   type: ADD_TO_SAVED_ADS_SUCCESS,
//   payload: filteredSavedAds,
// });//remove

// export const addToSavedAdsError = (error) => ({
//   type: ADD_TO_SAVED_ADS_ERROR,
//   payload: error,
// });

// export const removeFromSavedAdsStart = (request) => ({
//   type: REMOVED_FROM_SAVED_ADS_START,
//   payload: request,
// }); //remove

// export const removeFromSavedAdsSuccess = (filteredSavedAds) => ({
//   type: REMOVED_FROM_SAVED_ADS_SUCCESS,
//   payload: filteredSavedAds,
// });//done

// export const removeFromSavedAdsError = (error) => ({
//   type: REMOVED_FROM_SAVED_ADS_ERROR,
//   payload: error,
// });//done

const initialState = {
  toBeSkipedSavedAdsId: [],
  savedAdsIds: [],
  savedAds: {
    data: {},
    loading: false,
    error: null,
  },
};

const savedAdsManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOAD_SAVED_ADS_IDS_LOCAL:
    //   return {
    //     ...state,
    //     savedAdsIds: action.payload,
    //   };
    case ADD_SAVED_ADS_IDS_LOCAL:
      return {
        ...state,
        savedAdsIds: [...state.savedAdsIds, action.payload],
        
      };
    // case REMOVE_SAVED_ADS_IDS_LOCAL:
    //   return {
    //     ...state,
    //     savedAdsIds: state.savedAdsIds.filter(function (adId) {
    //       return adId !== action.payload;
    //     }),
    //   };
    // case ADD_TO_SAVED_ADS_START:
    // case REMOVED_FROM_SAVED_ADS_START:
    //   return {
    //     ...state,
    //     savedAds: {
    //       ...state.savedAds,
    //       loading: true,
    //     },
    //   };
    // case ADD_TO_SAVED_ADS_SUCCESS:
    // case REMOVED_FROM_SAVED_ADS_SUCCESS://que?
    //   console.log("777", action.payload?.data)
    //   return {
    //     ...state,
    //     savedAds: {
    //       ...state.savedAds,
    //       data: action.payload?.data,
    //       loading: false,
    //     },
    //   }; remove

    // case ADD_TO_SAVED_ADS_ERROR:
    //   return {
    //     ...state,
    //     savedAdsIds: state.savedAdsIds.filter(function (adId) {
    //         return adId !== action.payload?.data?.id;
    //     }),
    //     savedAds: {
    //         ...state.savedAds,
    //         error: action.payload?.data,
    //         loading: false,
    //       },
    //   };

    // case REMOVED_FROM_SAVED_ADS_ERROR:
    //   return {
    //     ...state,
    //     savedAdsIds: [...state.savedAdsIds, action.payload?.data?.id],
    //     savedAds: {
    //         ...state.savedAds,
    //         error: action.payload?.data,
    //         loading: false,
    //     },
    //   }; //remove

    case ADD_TO_SKIPED_SAVED_FILTERED_AD:
      return {
        ...state,
        toBeSkipedSavedAdsId: [...state.toBeSkipedSavedAdsId].concat(action.payload),
      };

      case REMOVE_FROM_SKIPED_SAVED_FILTERED_AD:
        return {
          ...state,
          toBeSkipedSavedAdsId: state.toBeSkipedSavedAdsId.filter(function (adId) {
            return adId !== action.payload;
          }),
        };
    default:
      return state;
  }
};

export default savedAdsManagerReducer;
