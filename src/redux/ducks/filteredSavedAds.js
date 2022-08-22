export const LOAD_SAVED_FILTERED_ADS_START = "LOAD_SAVED_FILTERED_ADS_START";
export const LOAD_SAVED_FILTERED_ADS_SUCCESS =
  "LOAD_SAVED_FILTERED_ADS_SUCCESS";
export const LOAD_SAVED_FILTERED_ADS_ERROR = "LOAD_SAVED_FILTERED_ADS_ERROR";

export const LOAD_MORE_SAVED_FILTERED_ADS_START =
  "LOAD_MORE_SAVED_FILTERED_ADS_START";
export const LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS =
  "LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS";
export const LOAD_MORE_SAVED_FILTERED_ADS_ERROR =
  "LOAD_MORE_SAVED_FILTERED_ADS_ERROR";

export const REMOVE_SAVED_FILTERED_AD = "REMOVE_SAVED_FILTERED_AD";
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_START =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_START";
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS";
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR";

export const SAVED_GET_PAGE_POSITION = "SAVED_GET_PAGE_POSITION";

export const SET_CURRENT_PAGINATION_INDEX = "SET_CURRENT_PAGINATION_INDEX";
export const SET_PAGINATION_SAVED_ADS = "SET_PAGINATION_SAVED_ADS";
// manger data
export const ADD_TO_SAVED_ADS_START = "ADD_TO_SAVED_ADS_START";

export const ADD_TO_SAVED_ADS_SUCCESS = "ADD_TO_SAVED_ADS_SUCCESS";
export const ADD_TO_SAVED_ADS_ERROR = "ADD_TO_SAVED_ADS_ERROR";

export const LOAD_SAVED_ADS_IDS_LOCAL = "LOAD_SAVED_ADS_IDS_LOCAL";

export const REMOVED_FROM_SAVED_ADS_START = "REMOVED_FROM_SAVED_ADS_START";
export const REMOVED_FROM_SAVED_ADS_SUCCESS = "REMOVED_FROM_SAVED_ADS_SUCCESS";
export const REMOVED_FROM_SAVED_ADS_ERROR = "REMOVED_FROM_SAVED_ADS_ERROR";

// ?maded self
// export const GET_SAVED_IDS = "GET_SAVED_IDS";
export const CHECK_ADS_WITH_APPLIED_FILTERS = "CHECK_ADS_WITH_APPLIED_FILTERS";

export const addToSavedAdsFilterLocalStart = (adToBeAdded) => ({
  type: ADD_TO_SAVED_FILTERED_AD_LOCAL_START,
  payload: adToBeAdded,
}); //done

export const addToSavedAdsFilterLocalSuccess = (adToBeAdded) => ({
  type: ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS,
  payload: adToBeAdded,
}); //done 1

export const addToSavedAdsFilterLocalError = (error) => ({
  type: ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR,
  payload: error,
});

export const removesavedFilteredAdLocal = (adToBeRemoved) => ({
  type: REMOVE_SAVED_FILTERED_AD,
  payload: adToBeRemoved,
}); //done 1

export const loadsavedFilteredAdsStart = (request) => ({
  type: LOAD_SAVED_FILTERED_ADS_START,
  payload: request,
}); //done 1

export const loadsavedFilteredAdsSuccess = (filteredSavedAds) => ({
  type: LOAD_SAVED_FILTERED_ADS_SUCCESS,
  payload: filteredSavedAds,
}); //done 1

export const loadsavedFilteredAdsError = (error) => ({
  type: LOAD_SAVED_FILTERED_ADS_ERROR,
  payload: error,
}); //done

export const loadMoresavedFilteredAdsStart = (request) => ({
  type: LOAD_MORE_SAVED_FILTERED_ADS_START,
  payload: request,
}); //done

export const loadMoresavedFilteredAdsSuccess = (filteredSavedAds) => ({
  type: LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS,
  payload: filteredSavedAds,
}); //done

export const loadMoresavedFilteredAdsError = (error) => ({
  type: LOAD_MORE_SAVED_FILTERED_ADS_ERROR,
  payload: error,
});
export const setPostionForSavedPageToScrollValueStart = (error) => ({
  type: SAVED_GET_PAGE_POSITION,
  payload: error,
});

export const setSavedCurrentPaginationIndex = (page) => ({
  type: SET_CURRENT_PAGINATION_INDEX,
  payload: page,
});

export const setSavedCurrentPaginationAds = (page) => ({
  type: SET_PAGINATION_SAVED_ADS,
  payload: page,
}); //done 1

// come from manage saved ad page
export const addToSavedAdsStart = (request) => ({
  type: ADD_TO_SAVED_ADS_START,
  payload: request,
}); //done 1

export const addToSavedAdsSuccess = (filteredSavedAds) => ({
  type: ADD_TO_SAVED_ADS_SUCCESS,
  payload: filteredSavedAds,
}); //done
export const addToSavedAdsError = (error) => ({
  type: ADD_TO_SAVED_ADS_ERROR,
  payload: error,
});

export const removeFromSavedAdsStart = (request) => ({
  type: REMOVED_FROM_SAVED_ADS_START,
  payload: request,
});

export const loadSavedAdsIdsLocal = (savedAdsIds) => ({
  type: LOAD_SAVED_ADS_IDS_LOCAL,
  payload: savedAdsIds,
}); // done 1
export const removeFromSavedAdsSuccess = (filteredSavedAds) => ({
  type: REMOVED_FROM_SAVED_ADS_SUCCESS,
  payload: filteredSavedAds,
}); //done

export const removeFromSavedAdsError = (error) => ({
  type: REMOVED_FROM_SAVED_ADS_ERROR,
  payload: error,
}); //done

// self made
// export const getAllSavedIds = (Ids) => ({
//   type: GET_SAVED_IDS,
// //   payload: Ids,
// // });

export const checkAplliedFiltersAds = (data) => ({
  type: CHECK_ADS_WITH_APPLIED_FILTERS,
  payload: data,
});

const initialState = {
  filteredSavedAds: [],
  savedAdsIds: [],
  SavedCurrentPage: [],
  SavedCurrentPageStartPoint: 0,
  SavedCurrentPageEndPoint: process.env.NO_OF_ADS_PER_PAGE,
  totalPages: 0,
  totalAds: 0,
  paginationIndex: 1,
  hasMoreData: true,
  postionOfPage: 0,
  loading: false,
  error: "",
};

const filteredSavedAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SAVED_FILTERED_ADS_START:
      return {
        ...state,
        filteredSavedAds: [],
        SavedCurrentPage: [],
        loading: true,
        // hasMoreData: true,
      };

    case LOAD_SAVED_FILTERED_ADS_SUCCESS:
      console.log("101", action.payload.data.all_ads);
      console.log("009", action.payload);
      console.log(
        "101 first time",
        action.payload.data.all_ads.slice(
          state.SavedCurrentPageStartPoint,
          state.SavedCurrentPageEndPoint
        )
      );

      return {
        ...state,
        loading: false,
        // filteredSavedAds:action.payload?.error === true ? [] : action.payload?.data.all_ads,
        filteredSavedAds: action.payload?.data.all_ads,
        totalPages: Math.ceil(
          action.payload.data.total_ads /
            process.env.REACT_APP_NO_OF_ADS_PER_PAGE
        ),
        totalAds: action.payload.data.total_ads,
        // savedAdsIds:  action.payload.data.saved_ads,
        // hasMoreData:action.payload?.data?.length < 8 ? false : true,
        SavedCurrentPage: action.payload.data.all_ads.slice(
          state.SavedCurrentPageStartPoint,
          state.SavedCurrentPageEndPoint
        ),
      };

    // case LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     filteredSavedAds: action.payload?.error === true ? state.filteredSavedAds : [...state.filteredSavedAds].concat(action.payload?.data.all_ads),
    //     totalPages:action.payload.data.total_pages,
    //     hasMoreData:action.payload?.length < 8 ? false : true,
    //   };

    case LOAD_SAVED_FILTERED_ADS_ERROR:
    case LOAD_MORE_SAVED_FILTERED_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.data?.error,
      };
    case SET_CURRENT_PAGINATION_INDEX:
      return {
        ...state,
        paginationIndex: action.payload,
      };
    case REMOVE_SAVED_FILTERED_AD:
      return {
        ...state,
        filteredSavedAds: state.filteredSavedAds.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
        SavedCurrentPage: state.SavedCurrentPage.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
        savedAdsIds: state.savedAdsIds.filter(function (adId) {
          return adId !== action.payload.id;
        }),
        totalAds: state.totalAds--,
      };

    case ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS:
      const filterdListToBeUpdated = [...state.filteredSavedAds];
      filterdListToBeUpdated.unshift(action.payload?.AdDetails);
      return {
        ...state,
        filteredSavedAds: action.payload?.valid
          ? filterdListToBeUpdated
          : state.filteredSavedAds,
        SavedCurrentPage: state.filteredSavedAds.slice(
          state.SavedCurrentPageStartPoint,
          state.SavedCurrentPageEndPoint
        ),
        paginationIndex:1,
        totalAds:state.totalAds+1,
      }; // done
    case ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR:
      return {
        ...state.SavedCurrentPage,
        totalAds: (state.totalAds - 1),
      };
    case SAVED_GET_PAGE_POSITION:
      return {
        ...state,
        // [`${action.payload.key}`]:action.payload.data,
        postionOfPage: action.payload,
      };
    case SET_PAGINATION_SAVED_ADS:
      console.log(
        "101 in redux ",
        state.filteredSavedAds.slice(action.payload.start, action.payload.end)
      );
      return {
        ...state,
        SavedCurrentPage: state.filteredSavedAds.slice(
          action.payload.start,
          action.payload.end
        ),
        SavedCurrentPageStartPoint: action.payload.start,
        SavedCurrentPageEndPoint: action.payload.end,
        paginationIndex: action.payload.currentPage,
        // totalAds:state.totalAds++
        // totalPages:Math.ceil(state.filteredSavedAds.length/4)
      };

    // manager saved ads
    case ADD_TO_SAVED_ADS_START:
      return {
        ...state,
        savedAdsIds: state.savedAdsIds.concat(action.payload.ad),
        // totalAds: state.totalAds + 1,
      }; //done 1 add local id
    // case ADD_TO_SAVED_ADS_SUCCESS:
    // return {
    //   ...state,
    //   savedAds: {
    //     ...state.savedAds,
    //     data: action.payload?.data,
    //     loading: false,
    //   },
    // };
    case ADD_TO_SAVED_ADS_ERROR:
      return {
        ...state,
        savedAdsIds: state.savedAdsIds.filter(function (adId) {
          return adId !== action.payload?.errorId;
        }),
      }; //done 1
    // seld made
    case LOAD_SAVED_ADS_IDS_LOCAL:
      return {
        ...state,
        savedAdsIds: action.payload,
      };
    case REMOVED_FROM_SAVED_ADS_START:
      console.log("404 --- ", state.SavedCurrentPage.length);
      return {
        ...state,
        filteredSavedAds: state.filteredSavedAds.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
        SavedCurrentPage: state.SavedCurrentPage.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
        savedAdsIds: state.savedAdsIds.filter(function (adId) {
          return adId !== action.payload.id;
        }),
        paginationIndex:
          state.SavedCurrentPage.length === 1
            ? state.paginationIndex - 1
            : state.paginationIndex,
        totalAds: state.totalAds - 1,
      };
    case REMOVED_FROM_SAVED_ADS_SUCCESS:
      return {
        ...state,
      };
    case REMOVED_FROM_SAVED_ADS_ERROR:
      return {
        ...state,
        filteredSavedAds: state.filteredSavedAds.concat(
          action.payload.AdDetail
        ),
        // SavedCurrentPage:state.SavedCurrentPage.filter(function (ad) {
        //   return ad.id !== action.payload?.AdDetail.id;
        // }),
        savedAdsIds: state.savedAdsIds.concat(action.payload.AdDetail.id),
        totalAds: (state.totalAds + 1),
      };

    case LOAD_MORE_SAVED_FILTERED_ADS_START:
      return {
        ...state,
        loading: true,
      };
    case CHECK_ADS_WITH_APPLIED_FILTERS:
      // const saveAppliedFilters = store.getState().savedAdsPerams.appliedFilters;
      //       const saveAppliedFilters=action.payload.filters;
      //       const ads=action.payload.adsData;

      //       console.log("00000", saveAppliedFilters , ads);

      //       const abc= saveAppliedFilters?.adcount.length !==0
      //       ?
      //       ((ads.noOfCopyAds >= saveAppliedFilters?.adcount[0] &&
      //                             ads.noOfCopyAds <= saveAppliedFilters?.adcount[1]) ? true : false)
      //                           : null

      //                           &&

      //                           saveAppliedFilters?.FacebookLikes.length !==0
      //       ?
      //       ((ads.pageInfo?.platforms[0]?.likes >= saveAppliedFilters?.FacebookLikes[0] &&
      //                             ads.pageInfo?.platforms[0]?.likes <= saveAppliedFilters?.FacebookLikes[1]) ? true : false)
      //                           : null

      //                           &&

      //                           saveAppliedFilters?.InstragramLike.length !==0
      //       ?
      //       ((ads.pageInfo?.platforms[1]?.followers >= saveAppliedFilters?.InstragramLike[0] &&
      //                             ads.pageInfo?.platforms[1]?.followers <= saveAppliedFilters?.InstragramLike[1]) ? true : false)
      //                           : null

      //                           &&

      // (saveAppliedFilters?.adstatus !== null
      //         ? ads?.status === saveAppliedFilters?.adstatus ? true : false
      //         : true)

      //         &&
      //  (saveAppliedFilters?.cta_status !== ""
      //         ?( ads.ctaStatus ===
      //         saveAppliedFilters?.cta_status ? true:false)
      //         : true) &&

      // (saveAppliedFilters?.startdate !=""
      //         ? (saveAppliedFilters?.startdate <=
      //             ads?.startDate &&
      //             saveAppliedFilters.enddate >=
      //             ads?.startDate ? true : false)
      //         : true)
      //         &&
      //              (saveAppliedFilters?.media_type === "" ||
      //       saveAppliedFilters?.media_type === "Video or Photo"
      //         ? true
      //         : (ads.adMediaType ===
      //           saveAppliedFilters?.media_type? true:false))

      //         // increaseCount ,

      //      console.log("000000",abc)

      return {
        ...state,
        /** saveAppliedFilters
         action.payload.noOfCopyAds
         */
      };

    default:
      return state;
  }
};

export default filteredSavedAdsReducer;
