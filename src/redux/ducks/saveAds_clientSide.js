export const LOAD_SAVEADSCLIENTSIDE_START = "LOAD_SAVEADSCLIENTSIDE_START";

export const CREATE_SAVEADSCLIENTSIDE_START = "CREATE_SAVEADSCLIENTSIDE_START";

export const DELETE_SAVEADSCLIENTSIDE_START = "DELETE_SAVEADSCLIENTSIDE_START";

export const ALL_SAVED_ADS_LOAD_FILTERDATA = "ALL_SAVED_ADS_LOAD_FILTERDATA";
export const ALL_SAVED_ADS_PUT_FILTERDATA = "ALL_SAVED_ADS_PUT_FILTERDATA";
export const ALL_SAVED_ADS_CREATE_FILTERDATA =
  "ALL_SAVED_ADS_CREATE_FILTERDATA";
export const ALL_SAVED_ADS_APPLIED_FILTERS = "ALL_SAVED_ADS_APPLIED_FILTERS";
export const ALL_SAVED_ADS_DATEFILTER = "ALL_SAVED_ADS_DATEFILTER";
export const ALL_SAVED_ADS_NOODADS_START = "ALL_SAVED_ADS_NOODADS_START";
export const ALL_SAVED_ADS_MEDIATYPE_START = "ALL_SAVED_ADS_MEDIATYPE_START";
export const ALL_SAVED_ADS_BUTTONTYPETYPE_START =
  "ALL_SAVED_ADS_BUTTONTYPETYPE_START";
export const ALL_SAVED_ADS_SET_SORT_FILTER_START =
  "ALL_SAVED_ADS_SET_SORT_FILTER_START";
export const ALL_SAVED_ADS_SORT_TYPE_START = "ALL_SAVED_ADS_SORT_TYPE_START";
export const ALL_SAVED_ADS_STATUS_START = "ALL_SAVED_ADS_STATUS_START";
export const ALL_SAVED_ADS_FACEBOOKLIKES_START =
  "ALL_SAVED_ADS_FACEBOOKLIKES_START";
export const ALL_SAVED_ADS_SET_POSTION_SCROLL =
  "ALL_SAVED_ADS_SET_POSTION_SCROLL";
export const ALL_SAVED_ADS_SEARCH_START = "ALL_SAVED_ADS_SEARCH_START";
export const ALL_SAVED_ADS_SEARCH_SUCCESS = "ALL_SAVED_ADS_SEARCH_SUCCESS";
export const ALL_SAVED_ADS_SEARCH_ERROR = "ALL_SAVED_ADS_SEARCH_ERROR";
export const ALL_SAVED_ADS_INCREASE_DECREASE_DATA_START =
  "ALL_SAVED_ADS_INCREASE_DECREASE_DATA_START";
export const ALL_SAVED_ADS_CLEAR_FILTERDATA = "ALL_SAVED_ADS_CLEAR_FILTERDATA";
export const ALL_SAVED_ADS_APPLY_ALL_FILTER = "ALL_SAVED_ADS_APPLY_ALL_FILTER";
export const ALL_SAVED_ADS_CLEAR_SINGLE_FILTER =
  "ALL_SAVED_ADS_CLEAR_SINGLE_FILTER";
export const SAVED_CHANGE_SEARCH_TYPE = "SAVED_CHANGE_SEARCH_TYPE";
export const ALL_FILTER_AFTER_SAVED_SEARCH_SUCCESS =
  "ALL_FILTER_AFTER_SAVED_SEARCH_SUCCESS";
export const EMPTY_SAVED_SEARCH_SUCCESS = "EMPTY_SAVED_SEARCH_SUCCESS";
export const SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER="SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER";
export const SAVED_SEARCH_PHRASE_START="SAVED_SEARCH_PHRASE_START";
export const SAVED_SEARCH_PHRASE_SUCCESS="SAVED_SEARCH_PHRASE_SUCCESS";
export const SAVED_SEARCH_PHRASE_ERROR="SAVED_SEARCH_PHRASE_ERROR";

export const LOAD_SAVEADS_START = "LOAD_SAVEADS_START";
export const LOAD_SAVEADS_SUCCESS = "LOAD_SAVEADS_SUCCESS";
export const LOAD_SAVEADS_ERROR = "LOAD_SAVEADS_ERROR";

export const CREATE_SAVEADS_START = "CREATE_SAVEADS_START";
export const CREATE_SAVEADS_SUCCESS = "CREATE_SAVEADS_SUCCESS";
export const CREATE_SAVEADS_ERROR = "CREATE_SAVEADS_ERROR";

export const DELETE_SAVEADS_START = "DELETE_SAVEADS_START";
export const DELETE_SAVEADS_SUCCESS = "DELETE_SAVEADS_SUCCESS";
export const DELETE_SAVEADS_ERROR = "DELETE_SAVEADS_ERROR";

export const loadSavedAdsStart = (data) => ({
  type: LOAD_SAVEADS_START,
  payload:data,
});

export const loadSavedAdsSuccess = (savedMediaAds) => ({
  type: LOAD_SAVEADS_SUCCESS,
  payload: savedMediaAds,
});

export const loadSavedAdsError = (error) => ({
  type: LOAD_SAVEADS_ERROR,
  payload: error,
});

export const createSavedAdsStart = (addAd) => ({
  type: CREATE_SAVEADS_START,
  payload: addAd,
});

export const createSavedAdsSuccess = (addAd) => ({
  type: CREATE_SAVEADS_SUCCESS,
  payload: addAd,
});

export const createSavedAdsError = (error) => ({
  type: CREATE_SAVEADS_ERROR,
  payload: error,
});

export const deleteSavedAdsStart = (saveId) => ({
  type: DELETE_SAVEADS_START,
  payload: saveId,
});

export const deleteSavedAdsSuccess = (saveId) => ({
  type: DELETE_SAVEADS_SUCCESS,
  payload: saveId,
});

export const deleteSavedAdsError = (error) => ({
  type: DELETE_SAVEADS_ERROR,
  payload: error,
});
// --------------------

export const loadSavedAdsClientSideStart = (allData) => ({
  type: LOAD_SAVEADSCLIENTSIDE_START,
  payload: allData,
});

// export const createSavedAdsClientSideStart = (ads) => ({
//   type: CREATE_SAVEADSCLIENTSIDE_START,
//   payload: ads,
// });

export const deleteSavedAdsClientSideStart = (ads) => ({
  type: DELETE_SAVEADSCLIENTSIDE_START,
  payload: ads,
});

export const loadSavedAdsFilteredDataStart = () => ({
  type: ALL_SAVED_ADS_LOAD_FILTERDATA,
});

export const putSavedAdsFilteredDataStart = (allData) => ({
  type: ALL_SAVED_ADS_PUT_FILTERDATA,
  payload: allData,
});

export const applySavedAdsallfilters = () => ({
  type: ALL_SAVED_ADS_APPLY_ALL_FILTER,
});
export const applySavedAdssrtingfilters = () => ({
  type: ALL_SAVED_ADS_SORT_TYPE_START,
});
export const SavedAdsdatevalueStart = (filter) => ({
  type: ALL_SAVED_ADS_DATEFILTER,
  payload: filter,
});

export const SavedAdsAdCountvalueStart = (filter) => ({
  type: ALL_SAVED_ADS_NOODADS_START,
  payload: filter,
});
export const SavedAdsMediaTypevalueStart = (filter) => ({
  type: ALL_SAVED_ADS_MEDIATYPE_START,
  payload: filter,
});

export const SavedAdsButtonTypevalueStart = (filter) => ({
  type: ALL_SAVED_ADS_BUTTONTYPETYPE_START,
  payload: filter,
});
export const SavedAdsfacebookLikesStart = (filter) => ({
  type: ALL_SAVED_ADS_FACEBOOKLIKES_START,
  payload: filter,
});
export const SavedAdsSetSortOrdervalueStart = (filter) => ({
  type: ALL_SAVED_ADS_SET_SORT_FILTER_START,
  payload: filter,
});
export const SavedfluctuatedDataEnd = () => ({
  type: ALL_SAVED_ADS_INCREASE_DECREASE_DATA_START,
});
export const SavedAdsSortvalueStart = () => ({
  type: ALL_SAVED_ADS_SORT_TYPE_START,
  // payload: filter,
});
export const SavedAdsstatusValueStart = (filter) => ({
  type: ALL_SAVED_ADS_STATUS_START,
  payload: filter,
});
export const SavedAdssearchValueStart = (filter) => ({
  type: ALL_SAVED_ADS_SEARCH_START,
  payload: filter,
});
// export const createFilteredDataStart = (ads) => ({
//   type: CREATE_FILTERDATA,
//   payload: ads,
// });
export const SavedAdssrtPostionForScrollValueStart = (filter) => ({
  type: ALL_SAVED_ADS_SET_POSTION_SCROLL,
  payload: filter,
});

export const SavedAdsclearFilteredDataStart = (ads) => ({
  type: ALL_SAVED_ADS_CLEAR_FILTERDATA,
  payload: ads,
});

export const SavedAdsclearSingleFilteredDataStart = (ads) => ({
  type: ALL_SAVED_ADS_CLEAR_SINGLE_FILTER,
  payload: ads,
});

export const SavedAdssearchStart = (Ads) => ({
  type: ALL_SAVED_ADS_SEARCH_START,
  payload: Ads,
});

export const SavedAdssearchSuccess = (Ads) => ({
  type: ALL_SAVED_ADS_SEARCH_SUCCESS,
  payload: Ads,
});

export const SavedAdsearchError = (error) => ({
  type: ALL_SAVED_ADS_SEARCH_ERROR,
  payload: error,
});
export const savedShnageSearchType = (data) => ({
  type: SAVED_CHANGE_SEARCH_TYPE,
  payload: data,
});

export const savedSearchPhraseStart = (Ads) => ({
  type: SAVED_SEARCH_PHRASE_START,
  payload: Ads,
});

export const savedSearchPhraseSuccess = (Ads) => ({
  type: SAVED_SEARCH_PHRASE_SUCCESS,
  payload: Ads,
});

export const savedSearchPhraseError = (error) => ({
  type: SAVED_SEARCH_PHRASE_ERROR,
  payload: error,
});

export const savedAdschnageSearchType = (data) => ({
  type: SAVED_CHANGE_SEARCH_TYPE,
  payload: data,
});

export const SavedAdsFilterAfterSearchStart = () => ({
  type: ALL_FILTER_AFTER_SAVED_SEARCH_SUCCESS,
  // payload: filter,
});
export const EmptySavedSearchValueStart = () => ({
  type: EMPTY_SAVED_SEARCH_SUCCESS,
  // payload: filter,
});
export const savedrangerefixMinMaxSiler = (data) => ({
  type: SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER,
  payload: data,
});

const initialState = {
  savedAdsLocal: [],
  savedIds: [],
  // allData: [],
  filteredData: [],
  SavedAppliedFilters: {
    StartRunningDate: { startdate: "", enddate: "", Message: "" },
    AdStatus: { status: "", Message: "" },
    AdCount: { min: 1, max: 1000, Message: "" },
    FacebookLikes: { min: 1, max: 100000, Message: "" },
    InstragramLike: { min: 1, max: 10000, Message: "" },
    MediaType: { selectedData: "", Message: "" },
    PurchaseType: { selctedButton: "", Message: "" },
  },
  sortFilter: {
    type: "",
    order: "Ascending",
  }, 
  maxRanger: {
    AdCount: { min: 1,  max: 1000 },
    FacebookLikes: {  min: 1, max: 100000 },
    InstragramLike: { min: 1, max: 10000 },
  },
  page_index:-1,
  postionYoffset: 0,
  searchBarData: "",
  searchedSavedData: [],
  search_loading: false,
  save_loading:false,
  searchType: "All these words",
  error: "",
};

const savedAdsClienSideReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SAVEADSCLIENTSIDE_START:
      return {
        ...state,
        // loading: false,
        // savedAdsLocal: action.payload,
        savedIds:
          action.payload !== "" ? action.payload.map((abc) => abc.id) : [],
        // filteredData: action.payload,
      };
    case CREATE_SAVEADSCLIENTSIDE_START:
      return {
        ...state,
        loading: false,
        savedAdsLocal: [...state.savedAdsLocal.concat(action.payload)],
        savedIds: [...state.savedIds.concat(action.payload.id)],
      };
    case DELETE_SAVEADSCLIENTSIDE_START:
      console.log("???????????????????????????????????????????????????");
      console.log(action.payload);
      console.log("???????????????????????????????????????????????????");

      return {
        ...state,
        loading: false,
        savedAdsLocal: state.savedAdsLocal.filter(
          (savedads) => savedads.id !== action.payload.id
        ),
        savedIds: state.savedIds.filter(
          (savedads) => savedads !== action.payload
        ),
      };
    case SAVED_CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };
    case ALL_SAVED_ADS_LOAD_FILTERDATA:
      return {
        ...state,

        // filteredData: action.payload,
      };
    case ALL_SAVED_ADS_PUT_FILTERDATA:
      return {
        ...state,

        filteredData: action.payload,
        // allData: action.payload,
      };
    case ALL_SAVED_ADS_DATEFILTER:
      console.log(action.payload);
      console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
      return {
        ...state,
        //
        // filteredData: [...state.filteredData],
        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: {
            startdate: action.payload.startdate,
            enddate: action.payload.enddate,
            Message: action.payload.Message,
          },
        },
      };
    case ALL_SAVED_ADS_NOODADS_START:
      return {
        ...state,
        //
        // filteredData: state.filteredData,
        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: {
            min: action.payload.min,
            max: action.payload.max,
            Message: action.payload.Message,
          },
        },
      };
    case ALL_SAVED_ADS_MEDIATYPE_START:
      return {
        ...state,
        //
        // filteredData: [...state.filteredData],

        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: {
            selectedData: action.payload.selectedData,
            Message: action.payload.Message,
          },
        },
      };
    case ALL_SAVED_ADS_BUTTONTYPETYPE_START:
      return {
        ...state,
        //
        // filteredData: [...state.filteredData],

        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: {
            selctedButton: action.payload.selctedButton,
            Message: action.payload.Message,
          },
        },
      };
    case ALL_SAVED_ADS_SET_POSTION_SCROLL:
      return {
        ...state,
        //
        // filteredData: [...state.filteredData],
        SavedAppliedFilters: state.SavedAppliedFilters,
        postionYoffset: action.payload,
      };
    case ALL_SAVED_ADS_SET_SORT_FILTER_START:
      return {
        ...state,

        SavedAppliedFilters: state.SavedAppliedFilters,
        sortFilter: {
          ...state.sortFilter,
          [`${action.payload.name}`]: `${action.payload.data}`,
        },

        // filteredData: [...state.filteredData],
      };
    case ALL_SAVED_ADS_INCREASE_DECREASE_DATA_START:
      return {
        ...state,
        SavedAppliedFilters: state.SavedAppliedFilters,
        sortFilter: { ...state.sortFilter, type: "" },      
        filteredData: state.savedAdsLocal,        
      };
    case ALL_SAVED_ADS_SORT_TYPE_START:
      const dummy = state.filteredData;
      console.log(state.sortFilter.type);

      state.sortFilter?.order === "Ascending"
        ? state.sortFilter?.type === "startDate"
          ? dummy?.sort(
              (firstAd, secondAd) =>
                Date.parse(firstAd[state.sortFilter?.type]) -
                Date.parse(secondAd[state.sortFilter?.type])
            )
          : state.sortFilter?.type === "likes"
          ? dummy?.sort(
              (firstAd, secondAd) =>
                firstAd["pageInfo"]["platforms"][0][state.sortFilter?.type] -
                secondAd["pageInfo"]["platforms"][0][state.sortFilter?.type]
            )
          : state.sortFilter?.type ===
            ("Ad count increase" || "Ad count decrease")
          ? dummy?.sort(
              (firstAd, secondAd) =>
                firstAd["noOfCopyAds"] - secondAd["noOfCopyAds"]
            )
          : dummy?.sort(
              (firstAd, secondAd) =>
                firstAd[state.sortFilter?.type] -
                secondAd[state.sortFilter?.type]
            )
        : state.sortFilter?.type === "startDate"
        ? dummy?.sort(
            (firstAd, secondAd) =>
              Date.parse(secondAd[state.sortFilter?.type]) -
              Date.parse(firstAd[state.sortFilter?.type])
          )
        : state.sortFilter?.type === "likes"
        ? dummy?.sort(
            (firstAd, secondAd) =>
              secondAd["pageInfo"]["platforms"][0][state.sortFilter?.type] -
              firstAd["pageInfo"]["platforms"][0][state.sortFilter?.type]
          )
        : state.sortFilter?.type ===
          ("Ad count increase" || "Ad count decrease")
        ? dummy?.sort(
            (firstAd, secondAd) =>
              secondAd["noOfCopyAds"] - firstAd["noOfCopyAds"]
          )
        : dummy?.sort(
            (firstAd, secondAd) =>
              secondAd[state.sortFilter?.type] - firstAd[state.sortFilter?.type]
          );
      // console.log(dummy);
      // console.log("..............................................");

      return {
        ...state,

        SavedAppliedFilters: state.SavedAppliedFilters,
        sortFilter: state.sortFilter,
        filteredData: dummy,
        // state.sortFilter?.order === "Ascending"
        //   ? state.sortFilter?.type === "startDate"
        //     ? state.filteredData?.sort(
        //         (firstAd, secondAd) =>
        //           Date.parse(firstAd["startDate"]) -
        //           Date.parse(secondAd["startDate"])
        //       )
        //     : state.filteredData?.sort(
        //         (firstAd, secondAd) =>
        //           firstAd[state.sortFilter?.type] -
        //           secondAd[state.sortFilter?.type]
        //       )
        //   : state.sortFilter?.type === "startDate"
        //   ? state.filteredData?.sort(
        //       (firstAd, secondAd) =>
        //         Date.parse(secondAd[state.sortFilter?.type]) -
        //         Date.parse(firstAd[state.sortFilter?.type])
        //     )
        //   : state.filteredData?.sort(
        //       (firstAd, secondAd) =>
        //         secondAd[state.sortFilter?.type] -
        //         firstAd[state.sortFilter?.type]
        // ),
      };
    case ALL_SAVED_ADS_STATUS_START:
      return {
        ...state,

        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: {
            status: action.payload.status,
            Message: action.payload.Message,
          },
        },
        // filteredData: [...state.filteredData],
      };
    case SAVED_SEARCH_PHRASE_START:
      return {
        ...state,
        search_loading: true,
        searchBarData: action.payload.data,
      };
      case SAVED_SEARCH_PHRASE_SUCCESS:
      console.log("----------------------------------------------------+");
      console.log(action.payload);
      console.log("----------------------------------------------------+");
      return {
        ...state,
        search_loading: false,
        // SavedAppliedFilters: state.SavedAppliedFilters,
        // searchBarData: state.searchBarData,
        searchedSavedData: Object.keys(action.payload).length?action.payload:[],
        filteredData:
        Object.keys(action.payload).length
            ? action.payload.filter(
                (ads) =>
                (state.SavedAppliedFilters?.AdCount?.min !== 1 ||
                  state.SavedAppliedFilters?.AdCount?.max !== 1000
                    ? ads.noOfCopyAds >= state.SavedAppliedFilters?.AdCount?.min &&
                      ads.noOfCopyAds <= state.SavedAppliedFilters?.AdCount?.max
                    : true)&&
                    (state.SavedAppliedFilters?.PurchaseType?.selctedButton !== ""
                      ? ads.ctaStatus ===
                        state.SavedAppliedFilters?.PurchaseType?.selctedButton
                      : true) &&
                  (state.SavedAppliedFilters?.FacebookLikes?.min !== 1 ||
                  state.SavedAppliedFilters?.FacebookLikes?.max !== 100000
                    ? ads?.pageInfo?.platforms[0]?.likes >=
                        state.SavedAppliedFilters?.FacebookLikes?.min &&
                      ads?.pageInfo?.platforms[0]?.likes <=
                        state.SavedAppliedFilters?.FacebookLikes?.max
                    : true) &&
                  (state.SavedAppliedFilters?.InstragramLike?.min !== 1 ||
                  state.SavedAppliedFilters?.InstragramLike?.max !== 10000
                    ? ads?.pageInfo?.platforms[1]?.followers >=
                        state.SavedAppliedFilters?.InstragramLike?.min &&
                      ads?.pageInfo?.platforms[1]?.followers <=
                        state.SavedAppliedFilters?.InstragramLike?.max
                    : true) &&
                  (state.SavedAppliedFilters?.MediaType?.selectedData === "" ||
                  state.SavedAppliedFilters?.MediaType?.selectedData ===
                    "Video or Photo"
                    ? true
                    : ads.adMediaType ===
                      state.SavedAppliedFilters?.MediaType?.selectedData) &&
                  (state.SavedAppliedFilters?.AdStatus?.status !== ""
                    ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                    : true) &&
                  (state.SavedAppliedFilters?.PurchaseType?.selctedButton === "" ||
                  state.SavedAppliedFilters?.PurchaseType?.selctedButton ===
                    "Shop Now"
                    ? true
                    : ads.ctaStatus.toLowerCase ===
                      state.SavedAppliedFilters?.PurchaseType?.selctedButton
                        .toLowerCase) &&
                  (state.SavedAppliedFilters?.AdStatus?.status !== ""
                    ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                    : true) &&
                  (state.SavedAppliedFilters?.StartRunningDate?.startdate &&
                  state.SavedAppliedFilters?.StartRunningDate?.enddate
                    ? state.SavedAppliedFilters?.StartRunningDate?.startdate <=
                        ads?.startDate &&
                      state.SavedAppliedFilters?.StartRunningDate?.enddate >=
                        ads?.startDate
                    : true) &&
                  (state.sortFilter?.type === "AdCountIncrease"
                    ? Object.values(ads.history)[
                        Object.keys(ads.history).length - 1
                      ]["noOfCopyAds"] >
                      Object.values(ads.history)[
                        Object.keys(ads.history).length - 2
                      ]["noOfCopyAds"]
                    : true) &&
                  (state.sortFilter?.type === "AdCountDecrease"
                    ? Object.values(ads.history)[
                        Object.keys(ads.history).length - 1
                      ]["noOfCopyAds"] <
                      Object.values(ads.history)[
                        Object.keys(ads.history).length - 2
                      ]["noOfCopyAds"]
                    : true)
              )
            : [],

       
      };
      case SAVED_SEARCH_PHRASE_ERROR:
        return {
          ...state,
          search_loading: false,
          error: action.payload,
        };
     
    case ALL_SAVED_ADS_SEARCH_START:
      return {
        ...state,
        search_loading: true,
        searchBarData: action.payload.data,
      };

    case ALL_SAVED_ADS_SEARCH_SUCCESS:
      console.log("----------------------------------------------------+");
      console.log(action.payload);
      console.log("----------------------------------------------------+");
      return {
        ...state,
        search_loading: false,
        // SavedAppliedFilters: state.SavedAppliedFilters,
        // searchBarData: state.searchBarData,
        searchedSavedData: Object.keys(action.payload).length?action.payload:[],
        filteredData:
        Object.keys(action.payload).length
            ? action.payload.filter(
                (ads) =>
                (state.SavedAppliedFilters?.AdCount?.min !== 1 ||
                  state.SavedAppliedFilters?.AdCount?.max !== 1000
                    ? ads.noOfCopyAds >= state.SavedAppliedFilters?.AdCount?.min &&
                      ads.noOfCopyAds <= state.SavedAppliedFilters?.AdCount?.max
                    : true)&&
                    (state.SavedAppliedFilters?.PurchaseType?.selctedButton !== ""
                      ? ads.ctaStatus ===
                        state.SavedAppliedFilters?.PurchaseType?.selctedButton
                      : true) &&
                  (state.SavedAppliedFilters?.FacebookLikes?.min !== 1 ||
                  state.SavedAppliedFilters?.FacebookLikes?.max !== 100000
                    ? ads?.pageInfo?.platforms[0]?.likes >=
                        state.SavedAppliedFilters?.FacebookLikes?.min &&
                      ads?.pageInfo?.platforms[0]?.likes <=
                        state.SavedAppliedFilters?.FacebookLikes?.max
                    : true) &&
                  (state.SavedAppliedFilters?.InstragramLike?.min !== 1 ||
                  state.SavedAppliedFilters?.InstragramLike?.max !== 10000
                    ? ads?.pageInfo?.platforms[1]?.followers >=
                        state.SavedAppliedFilters?.InstragramLike?.min &&
                      ads?.pageInfo?.platforms[1]?.followers <=
                        state.SavedAppliedFilters?.InstragramLike?.max
                    : true) &&
                  (state.SavedAppliedFilters?.MediaType?.selectedData === "" ||
                  state.SavedAppliedFilters?.MediaType?.selectedData ===
                    "Video or Photo"
                    ? true
                    : ads.adMediaType ===
                      state.SavedAppliedFilters?.MediaType?.selectedData) &&
                  (state.SavedAppliedFilters?.AdStatus?.status !== ""
                    ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                    : true) &&
                  (state.SavedAppliedFilters?.PurchaseType?.selctedButton === "" ||
                  state.SavedAppliedFilters?.PurchaseType?.selctedButton ===
                    "Shop Now"
                    ? true
                    : ads.ctaStatus.toLowerCase ===
                      state.SavedAppliedFilters?.PurchaseType?.selctedButton
                        .toLowerCase) &&
                  (state.SavedAppliedFilters?.AdStatus?.status !== ""
                    ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                    : true) &&
                  (state.SavedAppliedFilters?.StartRunningDate?.startdate &&
                  state.SavedAppliedFilters?.StartRunningDate?.enddate
                    ? state.SavedAppliedFilters?.StartRunningDate?.startdate <=
                        ads?.startDate &&
                      state.SavedAppliedFilters?.StartRunningDate?.enddate >=
                        ads?.startDate
                    : true) &&
                  (state.sortFilter?.type === "AdCountIncrease"
                    ? Object.values(ads.history)[
                        Object.keys(ads.history).length - 1
                      ]["noOfCopyAds"] >
                      Object.values(ads.history)[
                        Object.keys(ads.history).length - 2
                      ]["noOfCopyAds"]
                    : true) &&
                  (state.sortFilter?.type === "AdCountDecrease"
                    ? Object.values(ads.history)[
                        Object.keys(ads.history).length - 1
                      ]["noOfCopyAds"] <
                      Object.values(ads.history)[
                        Object.keys(ads.history).length - 2
                      ]["noOfCopyAds"]
                    : true)
              )
            : [],

       
      };

    case ALL_SAVED_ADS_SEARCH_ERROR:
      return {
        ...state,
        search_loading: false,
        error: action.payload,
      };
    case EMPTY_SAVED_SEARCH_SUCCESS:
      return {
        ...state,
        searchBarData: "",
        searchedSavedData: [],
        filteredData: state.savedAdsLocal,
      };
    case ALL_FILTER_AFTER_SAVED_SEARCH_SUCCESS:
      return {
        ...state,
        // : {
        //   ...state,

        filteredData: [
          ...state.searchedSavedData.filter((ads) => {
            console.log(Object.values(ads.history)[Object.keys(ads.history).length -1]['noOfCopyAds'])
            // console.log(ads?.pageInfo?.platforms[0]?.likes);
            // console.log(ads?.pageInfo?.platforms[1]?.followers);
            console.log("#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            return (
              (state.SavedAppliedFilters?.AdCount?.min !== 1 ||
              state.SavedAppliedFilters?.AdCount?.max !== 1000
                ? ads.noOfCopyAds >= state.SavedAppliedFilters?.AdCount?.min &&
                  ads.noOfCopyAds <= state.SavedAppliedFilters?.AdCount?.max
                : true)&&
                (state.SavedAppliedFilters?.PurchaseType?.selctedButton !== ""
                  ? ads.ctaStatus ===
                    state.SavedAppliedFilters?.PurchaseType?.selctedButton
                  : true) &&
              (state.SavedAppliedFilters?.FacebookLikes?.min !== 1 ||
              state.SavedAppliedFilters?.FacebookLikes?.max !== 100000
                ? ads?.pageInfo?.platforms[0]?.likes >=
                    state.SavedAppliedFilters?.FacebookLikes?.min &&
                  ads?.pageInfo?.platforms[0]?.likes <=
                    state.SavedAppliedFilters?.FacebookLikes?.max
                : true) &&
              (state.SavedAppliedFilters?.InstragramLike?.min !== 1 ||
              state.SavedAppliedFilters?.InstragramLike?.max !== 10000
                ? ads?.pageInfo?.platforms[1]?.followers >=
                    state.SavedAppliedFilters?.InstragramLike?.min &&
                  ads?.pageInfo?.platforms[1]?.followers <=
                    state.SavedAppliedFilters?.InstragramLike?.max
                : true) &&
              (state.SavedAppliedFilters?.MediaType?.selectedData === "" ||
              state.SavedAppliedFilters?.MediaType?.selectedData ===
                "Video or Photo"
                ? true
                : ads.adMediaType ===
                  state.SavedAppliedFilters?.MediaType?.selectedData) &&
              (state.SavedAppliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                : true) &&
              (state.SavedAppliedFilters?.PurchaseType?.selctedButton === "" ||
              state.SavedAppliedFilters?.PurchaseType?.selctedButton ===
                "Shop Now"
                ? true
                : ads.ctaStatus.toLowerCase ===
                  state.SavedAppliedFilters?.PurchaseType?.selctedButton
                    .toLowerCase) &&
              (state.SavedAppliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                : true) &&
              (state.SavedAppliedFilters?.StartRunningDate?.startdate &&
              state.SavedAppliedFilters?.StartRunningDate?.enddate
                ? state.SavedAppliedFilters?.StartRunningDate?.startdate <=
                    ads?.startDate &&
                  state.SavedAppliedFilters?.StartRunningDate?.enddate >=
                    ads?.startDate
                : true) &&
              (state.sortFilter?.type === "AdCountIncrease"
                ? Object.values(ads.history)[
                    Object.keys(ads.history).length - 1
                  ]["noOfCopyAds"] >
                  Object.values(ads.history)[
                    Object.keys(ads.history).length - 2
                  ]["noOfCopyAds"]
                : true) &&
              (state.sortFilter?.type === "AdCountDecrease"
                ? Object.values(ads.history)[
                    Object.keys(ads.history).length - 1
                  ]["noOfCopyAds"] <
                  Object.values(ads.history)[
                    Object.keys(ads.history).length - 2
                  ]["noOfCopyAds"]
                : true)
            );
          }),
        ],
        // SavedAppliedFilters: state.SavedAppliedFilters,
        // },
      };

    case ALL_SAVED_ADS_APPLY_ALL_FILTER:
      console.log(state.SavedAppliedFilters?.StartRunningDate?.startdate);
      console.log("..???????????????");
      return {
        ...state,
        //
        filteredData: [
          ...state.savedAdsLocal.filter((ads) => {
            console.log(ads?.pageInfo?.platforms[0]?.likes);
            console.log(ads?.pageInfo?.platforms[1]?.followers);
            console.log("#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            return (
              (state.SavedAppliedFilters?.AdCount?.min !== 1 ||
              state.SavedAppliedFilters?.AdCount?.max !== 1000
                ? ads.noOfCopyAds >= state.SavedAppliedFilters?.AdCount?.min &&
                  ads.noOfCopyAds <= state.SavedAppliedFilters?.AdCount?.max
                : true) &&
                (state.SavedAppliedFilters?.PurchaseType?.selctedButton !== ""
                  ? ads.ctaStatus ===
                    state.SavedAppliedFilters?.PurchaseType?.selctedButton
                  : true) &&
              (state.SavedAppliedFilters?.FacebookLikes?.min !== 1 ||
              state.SavedAppliedFilters?.FacebookLikes?.max !== 100000
                ? ads?.pageInfo?.platforms[0]?.likes >=
                    state.SavedAppliedFilters?.FacebookLikes?.min &&
                  ads?.pageInfo?.platforms[0]?.likes <=
                    state.SavedAppliedFilters?.FacebookLikes?.max
                : true) &&
              (state.SavedAppliedFilters?.InstragramLike?.min !== 1 ||
              state.SavedAppliedFilters?.InstragramLike?.max !== 10000
                ? ads?.pageInfo?.platforms[1]?.followers >=
                    state.SavedAppliedFilters?.InstragramLike?.min &&
                  ads?.pageInfo?.platforms[1]?.followers <=
                    state.SavedAppliedFilters?.InstragramLike?.max
                : true) &&
              (state.SavedAppliedFilters?.MediaType?.selectedData === "" ||
              state.SavedAppliedFilters?.MediaType?.selectedData ===
                "Video or Photo"
                ? true
                : ads.adMediaType ===
                  state.SavedAppliedFilters?.MediaType?.selectedData) &&
              (state.SavedAppliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                : true) &&
              (state.SavedAppliedFilters?.PurchaseType?.selctedButton === "" ||
              state.SavedAppliedFilters?.PurchaseType?.selctedButton ===
                "Shop Now"
                ? true
                : ads.ctaStatus.toLowerCase ===
                  state.SavedAppliedFilters?.PurchaseType?.selctedButton
                    .toLowerCase) &&
              (state.SavedAppliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.SavedAppliedFilters?.AdStatus?.status
                : true) &&
              (state.SavedAppliedFilters?.StartRunningDate?.startdate &&
              state.SavedAppliedFilters?.StartRunningDate?.enddate
                ? state.SavedAppliedFilters?.StartRunningDate?.startdate <=
                    ads?.startDate &&
                  state.SavedAppliedFilters?.StartRunningDate?.enddate >=
                    ads?.startDate
                : true) &&
              
              (state.sortFilter?.type === "AdCountIncrease"
              ? Object.values(ads.history)[
                  Object.keys(ads.history).length - 1
                ]["noOfCopyAds"] >
                Object.values(ads.history)[
                  Object.keys(ads.history).length - 2
                ]["noOfCopyAds"]
              : true) &&
            (state.sortFilter?.type === "AdCountDecrease"
              ? Object.values(ads.history)[
                  Object.keys(ads.history).length - 1
                ]["noOfCopyAds"] <
                Object.values(ads.history)[
                  Object.keys(ads.history).length - 2
                ]["noOfCopyAds"]
              : true)
            );
          }),
        ],
        // SavedAppliedFilters: state.SavedAppliedFilters,
      };

    case ALL_SAVED_ADS_APPLIED_FILTERS:
      return {
        ...state,     
        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: `${action.payload.data}`,
        },
      };
    case ALL_SAVED_ADS_CLEAR_FILTERDATA:
      return {
        ...state,
        // filteredData:state.allData,
        // appliedFilters:action.payload,
        filteredData:
          state.searchBarData !== ""
            ? state.searchedSavedData
            :state.savedAdsLocal,
        SavedAppliedFilters: action.payload
        ,
      };
    case ALL_SAVED_ADS_CLEAR_SINGLE_FILTER:
      return {
        ...state,                
        SavedAppliedFilters: {
          ...state.SavedAppliedFilters,
          [`${action.payload.name}`]: action.payload.data,
        },
      };
   case SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER:
    return {
      ...state,    
      maxRanger: {
        ...state.maxRanger,
        [`${action.payload.name}`]: {          
          max: action.payload.max,
        },
      },
    };
    // ----------------------------
    case LOAD_SAVEADS_START:
      return {
        ...state,
        page_index:action.payload.page_index,                
        savedAdsLocal:action.payload.page_index===0?[]:state.savedAdsLocal,
      }
    case CREATE_SAVEADS_START:
    case DELETE_SAVEADS_START:
      return {
        ...state,
        save_loading: true,
      };
    case LOAD_SAVEADS_SUCCESS:
      console.log("++++++++++++++++++++++++++++++++++")
      console.log(action.payload)
      return {
        ...state,
        save_loading: false,
        savedAdsLocal: state.savedAdsLocal.concat(action.payload),
        savedIds:
        action.payload !== "" ? state.savedIds.concat(action.payload.map((abc) => abc.id)) : [],
        // filteredData:action.payload
      };
    case CREATE_SAVEADS_SUCCESS:
      console.log("999999999999999999999999")
      console.log(action.payload[0].id)
      return {
        ...state,
        save_loading: false,
        savedAdsLocal: [...state.savedAdsLocal.concat(action.payload)],                 
        savedIds: [...state.savedIds.concat(action.payload[0].id)],     
        filteredData:  [...state.filteredData.concat(action.payload)],
      };
    case LOAD_SAVEADS_ERROR:
    case CREATE_SAVEADS_ERROR:
      return {
        ...state,
        save_loading: false,
        error: action.payload,
      };
      case DELETE_SAVEADS_SUCCESS: {
        return {
          ...state,
          save_loading: false,
          savedAdsLocal: state.savedAdsLocal.filter((savedads) => savedads.id !== action.payload.id),
          savedIds: [...state.savedIds.filter((savedads) => savedads !== action.payload.id)],
            // .concat(action.payload.id)],   
            filteredData: state.filteredData.filter((savedads) => savedads.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
};

export default savedAdsClienSideReducer;
