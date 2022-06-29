export const LOAD_FILTERDATA = "LOAD_FILTERDATA";
export const PUT_FILTERDATA = "PUT_FILTERDATA";
export const CREATE_FILTERDATA = "CREATE_FILTERDATA";
export const APPLIED_FILTERS = "APPLIED_FILTERS";
export const DATEFILTER = "DATEFILTER";
export const NOODADS_START = "NOODADS_START";
export const MEDIATYPE_START = "MEDIATYPE_START";
export const STATUS_START = "STATUS_START";
export const CLEAR_FILTERDATA = "CLEAR_FILTERDATA";
export const APPLY_ALL_FILTER = "APPLY_ALL_FILTER";
export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";

export const loadFilteredDataStart = () => ({
  type: LOAD_FILTERDATA,
});

export const putFilteredDataStart = (allData) => ({
  type: PUT_FILTERDATA,
  payload: allData,
});

export const applyallfilters = () => ({
  type: APPLY_ALL_FILTER,
});

export const datevalueStart = (filter) => ({
  type: DATEFILTER,
  payload: filter,
});

export const AdCountvalueStart = (filter) => ({
  type: NOODADS_START,
  payload: filter,
});
export const MediaTypevalueStart = (filter) => ({
  type: MEDIATYPE_START,
  payload: filter,
});
export const statusValueStart = (filter) => ({
  type: STATUS_START,
  payload: filter,
});
// export const createFilteredDataStart = (ads) => ({
//   type: CREATE_FILTERDATA,
//   payload: ads,
// });

export const clearFilteredDataStart = (ads) => ({
  type: CLEAR_FILTERDATA,
  payload: ads,
});

export const clearSingleFilteredDataStart = (ads) => ({
  type: CLEAR_SINGLE_FILTER,
  payload: ads,
});

const initialState = {
  allData: [],
  filteredData: [],
  appliedFilters: {
    StartRunningDate: { startdate: "", enddate: "", Message: "" },
    AdStatus: { status: "", Message: "" },
    AdCount: { min: 0, max: 1000, Message: "" },
    FacebookLikes: { Message: "" },
    InstragramLike: { Message: "" },
    MediaType: { selectedData: "Video or Photo", Message: "" },
  },
  loading: false,
  error: "",
};

const FilterDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTERDATA:
      return {
        ...state,
        loading: false,
        // filteredData: action.payload,
      };
    case PUT_FILTERDATA:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
        allData: action.payload,
      };
    case DATEFILTER:
      console.log(action.payload);
      console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
      return {
        ...state,
        loading: false,
        filteredData: [...state.filteredData],
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            startdate: action.payload.startdate,
            enddate: action.payload.enddate,
            Message: action.payload.Message,
          },
        },
      };
    case NOODADS_START:
      return {
        ...state,
        loading: false,
        filteredData: [
            ...state.allData.filter(
              (ads) =>
                (state.appliedFilters?.AdCount?.min !== 0 ||
                state.appliedFilters?.AdCount?.max !== 1000
                  ? ads.noOfCopyAds >= action.payload?.min &&
                    ads.noOfCopyAds <= action.payload?.max
                  : true) &&
                (state.appliedFilters?.MediaType?.selectedData === "" ||
                state.appliedFilters?.MediaType?.selectedData === "Video or Photo"
                  ? true
                  : ads.adMediaType ===
                    state.appliedFilters?.MediaType?.selectedData) &&
                (state.appliedFilters?.AdStatus?.status !== ""
                  ? ads?.status === state.appliedFilters?.AdStatus?.status
                  : true) &&
                (state.appliedFilters?.StartRunningDate?.startdate &&
                state.appliedFilters?.StartRunningDate?.enddate
                  ? state.appliedFilters?.StartRunningDate?.startdate <=
                      ads?.startDate &&
                    state.appliedFilters?.StartRunningDate?.enddate >=
                      ads?.startDate
                  : true)
            ),
          ],
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            min: action.payload.min,
            max: action.payload.max,
            Message: action.payload.Message,
          },
        },
      };
    case MEDIATYPE_START:
      return {
        ...state,
        loading: false,
        filteredData: [...state.filteredData],
        // filteredData: [
        //     ...state.allData.filter(
        //       (ads) =>
        //         (state.appliedFilters?.AdCount?.min !== 0 ||
        //         state.appliedFilters?.AdCount?.max !== 1000
        //           ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
        //             ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
        //           : true) &&
        //         (action.payload.selectedData === "" ||
        //         action.payload.selectedData === "Video or Photo"
        //           ? true
        //           : ads.adMediaType ===
        //           action.payload.selectedData) &&
        //         (state.appliedFilters?.AdStatus?.status !== ""
        //           ? ads?.status === state.appliedFilters?.AdStatus?.status
        //           : true) &&
        //         (state.appliedFilters?.StartRunningDate?.startdate &&
        //         state.appliedFilters?.StartRunningDate?.enddate
        //           ? state.appliedFilters?.StartRunningDate?.startdate <=
        //               ads?.startDate &&
        //             state.appliedFilters?.StartRunningDate?.enddate >=
        //               ads?.startDate
        //           : true)
        //     ),
        //   ],
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            selectedData: action.payload.selectedData,
            Message: action.payload.Message,
          },
        },
      };
    case STATUS_START:
      return {
        ...state,
        loading: false,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            status: action.payload.status,           
            Message: action.payload.Message,
          },
        },
        filteredData: [...state.filteredData],
      };
    case APPLY_ALL_FILTER:
      console.log(state.appliedFilters?.StartRunningDate?.startdate);
      console.log("..???????????????");
      return {
        ...state,
        loading: false,
        filteredData: [
          ...state.allData.filter(
            (ads) =>
              (state.appliedFilters?.AdCount?.min !== 0 ||
              state.appliedFilters?.AdCount?.max !== 1000
                ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
                  ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
                : true) &&
              (state.appliedFilters?.MediaType?.selectedData === "" ||
              state.appliedFilters?.MediaType?.selectedData === "Video or Photo"
                ? true
                : ads.adMediaType ===
                  state.appliedFilters?.MediaType?.selectedData) &&
              (state.appliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.appliedFilters?.AdStatus?.status
                : true) &&
              (state.appliedFilters?.StartRunningDate?.startdate &&
              state.appliedFilters?.StartRunningDate?.enddate
                ? state.appliedFilters?.StartRunningDate?.startdate <=
                    ads?.startDate &&
                  state.appliedFilters?.StartRunningDate?.enddate >=
                    ads?.startDate
                : true)
          ),
        ],
        appliedFilters: state.appliedFilters,
      };

    case APPLIED_FILTERS:
      return {
        ...state,
        loading: false,
        filteredData: [...state.filteredData],
        appliedFilters: {
          ...state.filteredData,
          [`${action.payload.name}`]: `${action.payload.data}`,
        },
      };
    case CLEAR_FILTERDATA:
      return {
        ...state,
        loading: false,
        filteredData: [...state.allData],
        appliedFilters: action.payload,
      };
    case CLEAR_SINGLE_FILTER:
      return {
        ...state,
        loading: false,
        filteredData: [...state.filteredData],
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: action.payload.data,
        },
      };
    // case CREATE_FILTERDATA:
    //   return {
    //     ...state,
    //     loading: false,
    //     filteredData: [...state.filteredData.concat(action.payload)],
    //   };
    // case DELETE_FILTERDATA:
    //   return {
    //     ...state,
    //     loading: false,
    //     filteredData: state.filteredData.filter(
    //       (savedads) => savedads.adID !== action.payload.adID
    //     ),
    //   };

    default:
      return state;
  }
};

export default FilterDataReducer;
