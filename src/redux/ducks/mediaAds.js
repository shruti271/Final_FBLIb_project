export const LOAD_MEDIA_START = "LOAD_MEDIA_START";
export const LOAD_MEDIA_SUCCESS = "LOAD_MEDIA_SUCCESS";
export const LOAD_MEDIA_ERROR = "LOAD_MEDIA_ERROR";

export const UPDATE_MEDIA_START = "UPDATE_MEDIA_START";
export const UPDATE_MEDIA_SUCCESS = "UPDATE_MEDIA_SUCCESS";
export const UPDATE_MEDIA_ERROR = "UPDATE_MEDIA_ERROR";
// ?---------------filters
export const DATEFILTER = "DATEFILTER";
export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";
export const NOODADS_START = "NOODADS_START";
export const STATUS_START = "STATUS_START";
export const REFIX_MIN_MAX_RANGE_IN_SLIDER = "REFIX_MIN_MAX_RANGE_IN_SLIDER";
export const BUTTONTYPETYPE_START = "BUTTONTYPETYPE_START";
export const MEDIATYPE_START = "MEDIATYPE_START";

export const ALL_STATUS_START = "ALL_STATUS_START";
export const ALL_STATUS_SUCCESS = "ALL_STATUS_SUCCESS";
export const ALL_STATUS_ERROR = "ALL_STATUS_ERROR";

export const loadMediaStart = (allMediaAds) => ({
  type: LOAD_MEDIA_START,
  payload: allMediaAds,
});

export const loadMediaSuccess = (allMediaAds) => ({
  type: LOAD_MEDIA_SUCCESS,
  payload: allMediaAds,
});

export const loadMediaError = (error) => ({
  type: LOAD_MEDIA_ERROR,
  payload: error,
});

export const updateMediaStart = (updatead) => ({
  type: UPDATE_MEDIA_START,
  payload: updatead,
});

export const updateMediaSuccess = (updatead) => ({
  type: UPDATE_MEDIA_SUCCESS,
  payload: updatead,
});

export const updateMediaError = (error) => ({
  type: UPDATE_MEDIA_ERROR,
  payload: error,
});

// -----------------filters
export const datevalueStart = (filter) => ({
  type: DATEFILTER,
  payload: filter,
});
export const clearSingleFilteredDataStart = (ads) => ({
  type: CLEAR_SINGLE_FILTER,
  payload: ads,
});
export const AdCountvalueStart = (filter) => ({
  type: NOODADS_START,
  payload: filter,
});

export const statusValueStart = (filter) => ({
  type: STATUS_START,
  payload: filter,
});
export const rangerefixMinMaxSiler = (data) => ({
  type: REFIX_MIN_MAX_RANGE_IN_SLIDER,
  payload: data,
});
export const ButtonTypevalueStart = (filter) => ({
  type: BUTTONTYPETYPE_START,
  payload: filter,
});
export const MediaTypevalueStart = (filter) => ({
  type: MEDIATYPE_START,
  payload: filter,
});

export const getSetCatSatus = () => ({
  type: ALL_STATUS_START,
});
export const setCatSatusSuccess = (Ads) => ({
  type: ALL_STATUS_SUCCESS,
  payload: Ads,
});

export const setCatSatusError = (error) => ({
  type: ALL_STATUS_ERROR,
  payload: error,
});

const initialState = {
  allMediaAds: [],
  allMediaAdsData: [],
  endOfData:false,
  savedIds: [],
  page_index: 0,
  loading: false,
  error: "",
  appliedFilters: { 
    StartRunningDate: { startdate: "", enddate: "", Message: "" },
    AdStatus: { status: "", Message: "" },
    AdCount: { min: 1, max: 1000, Message: "" },
    FacebookLikes: { min: 1, max: 100000, Message: "" },
    InstragramLike: { min: 1, max: 10000, Message: "" },
    MediaType: { selectedData: "", Message: "" },
    PurchaseType: { selctedButton: "", Message: "" },
  },
  maxRanger: {
    AdCount: { min: 1,  max: 1000 },
    FacebookLikes: {  min: 1, max: 100000 },
    InstragramLike: { min: 1, max: 10000 },
  },

  sortFilter: {
    type: "",
    order: "Ascending",
  },
  postionYoffset: 0,
  searchBarData: "",
  searchType: "All these words",
  seactBarFilterData: [],
  search_loading: false,
  ctaStatus: [],
  // error: "",
};
const mediaReducer = (state = initialState, action) => {
  console.log("555555555555555", action.payload);

  // console.log(action?.payload?.adID);
  // console.log(allMediaAds[0].adID);
  // console.log("88888888888888888888888888888888888888888");
  switch (action.type) {
    case LOAD_MEDIA_START:
      console.log("11111--------", action.payload.initialState);
      return {
        ...state,
        // initialState:action.payload,
        loading: true,
        page_index: action.payload.page_index,
        allMediaAdsData:action.payload.page_index===0?[]:state.allMediaAdsData,
        // initialState: [...state.action.payload, ...action.allMediaAds],
      };

    case UPDATE_MEDIA_START:
      return {
        ...state,
        loading: false,
      };
    case LOAD_MEDIA_SUCCESS:
      // const updateData = [...state.allMediaAds,action.payload]
      console.log(
        ":::::1111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        action.payload === {},action.payload === ""
      );
      return {
        ...state,
        loading: false,
        allMediaAdsData: action.payload.error ===false?state.allMediaAdsData.concat(
          action.payload.data[1]?.all_ads
        ):state.allMediaAdsData,
        // savedIds:state.savedIds.concat(action.payload.saved_ads),
      };
    case UPDATE_MEDIA_SUCCESS:
      const index = state.allMediaAds.findIndex(
        (ads) => ads.adID === action.payload.adID
      );

      const newArray = [...state.allMediaAds];

      newArray[index] = action.payload;

      return {
        ...state,
        loading: false,
        allMediaAds: newArray,
      };
    case LOAD_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        page_index: state.page_index - 1,
      };
    case UPDATE_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        
      };


      case DATEFILTER:
        return {
          ...state,
          // : {
          //   ...state,
          //
          // filteredData: [
          //   ...state.filteredData,
          // ],
          appliedFilters: {
            ...state.appliedFilters,
            [`${action.payload.name}`]: {
              startdate: action.payload.startdate,
              enddate: action.payload.enddate,
              Message: action.payload.Message,
            },
          },
          // },
        };
        case CLEAR_SINGLE_FILTER:
          return {
            ...state,
            appliedFilters: {
              ...state.appliedFilters,
              [`${action.payload.name}`]: action.payload.data,
            },            
          };
          case NOODADS_START:
            return {
              ...state,
              // : {
              //   ...state,
              //
              // filteredData: state.filteredData,
              appliedFilters: {
                ...state.appliedFilters,
                [`${action.payload.name}`]: {
                  min: action.payload.min,
                  max: action.payload.max,
                  Message: action.payload.Message,
                },
              },
              // },
            };
            case STATUS_START:
              return {
                ...state,
                // : {
                //   ...state,
                //
                appliedFilters: {
                  ...state.appliedFilters,
                  [`${action.payload.name}`]: {
                    status: action.payload.status,
                    Message: action.payload.Message,
                  },
                },
                // filteredData: state.filteredData,
                // },
              };
              case REFIX_MIN_MAX_RANGE_IN_SLIDER:
                return {
                  ...state,
                  maxRanger: {
                    ...state.maxRanger,
                    [`${action.payload.name}`]: {
                      min: 1,
                      max: action.payload.max,
                    },
                  },
                };
                case BUTTONTYPETYPE_START:
      return {
        ...state,
        // : {
        //   ...state,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            selctedButton: action.payload.selctedButton,
            Message: action.payload.Message,
          },
        },
        // },
      };
      case MEDIATYPE_START:
        return {
          ...state,
          appliedFilters: {
            ...state.appliedFilters,
            [`${action.payload.name}`]: {
              selectedData: action.payload.selectedData,
              Message: action.payload.Message,
            },
          },
          // },
        };
        case ALL_STATUS_START:
          return { ...state };
        case ALL_STATUS_SUCCESS:
          return {
            ...state,
            ctaStatus: action.payload,
          };
        case ALL_STATUS_ERROR:
          return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default mediaReducer;

// export const LOAD_MEDIA_START = "LOAD_MEDIA_START";
// export const LOAD_MEDIA_SUCCESS = "LOAD_MEDIA_SUCCESS";
// export const LOAD_MEDIA_ERROR = "LOAD_MEDIA_ERROR";

// export const UPDATE_MEDIA_START = "UPDATE_MEDIA_START";
// export const UPDATE_MEDIA_SUCCESS = "UPDATE_MEDIA_SUCCESS";
// export const UPDATE_MEDIA_ERROR = "UPDATE_MEDIA_ERROR";

// export const loadMediaStart = (allMediaAds) => ({
//   type: LOAD_MEDIA_START,
//   payload:allMediaAds,
// });

// export const loadMediaSuccess = (allMediaAds) => ({
//   type: LOAD_MEDIA_SUCCESS,
//   payload: allMediaAds,
// });

// export const loadMediaError = (error) => ({
//   type: LOAD_MEDIA_ERROR,
//   payload: error,
// });

// export const updateMediaStart = (updatead) => ({
//   type: UPDATE_MEDIA_START,
//   payload: updatead,
// });

// export const updateMediaSuccess = (updatead) => ({
//   type: UPDATE_MEDIA_SUCCESS,
//   payload: updatead,
// });

// export const updateMediaError = (error) => ({
//   type: UPDATE_MEDIA_ERROR,
//   payload: error,
// });

// const initialState = {
//   allMediaAds: [],
//   // savedIds:[],
//   page_index:0,
//   loading: false,
//   error: "",
// };
// const mediaReducer = (state = initialState, action) => {
// console.log("555555555555555",action.payload)

//   // console.log(action?.payload?.adID);
//   // console.log(allMediaAds[0].adID);
//   // console.log("88888888888888888888888888888888888888888");
//   switch (action.type) {
//     case LOAD_MEDIA_START:
//       console.log("11111--------",action.payload.initialState)
//       return {
//         ...state,
//         // initialState:action.payload,
//         loading: true,
//         // page_index:action.payload.page_index+1,
//         // initialState: [...state.action.payload, ...action.allMediaAds],
//       };

//     case UPDATE_MEDIA_START:
//       return {
//         ...state,
//         loading: true,
//       };
//     case LOAD_MEDIA_SUCCESS:
//         // const updateData = [...state.allMediaAds,action.payload]
//       console.log(":::::",action.payload)
//       return {
//         ...state,
//         loading: false,
//         allMediaAds: action.payload,
//       };
//     case UPDATE_MEDIA_SUCCESS:
//       const index = state.allMediaAds.findIndex(
//         (ads) => ads.adID === action.payload.adID
//       );

//       const newArray = [...state.allMediaAds];

//       newArray[index] = action.payload;

//       return {
//         ...state,
//         loading: false,
//         allMediaAds: newArray,
//       };
//     case LOAD_MEDIA_ERROR:
//     case UPDATE_MEDIA_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,

//       };
//     default:
//       return state;
//   }
// };

// export default mediaReducer;
