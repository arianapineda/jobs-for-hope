import {
  CHANGE_SEARCHFIELD,
  CHANGE_SEARCH_ZIPCODE,
  FETCH_JOBS_PENDING,
  FETCHED_JOBS_SUCCESS,
  FETCHED_JOBS_FAILED,
  FETCH_ORGANIZATIONS_PENDING,
  FETCHED_ORGANIZATIONS_SUCCESS,
  FETCHED_ORGANIZATIONS_FAILED
} from './constants.js';


//job searchfield reducer
const initialStateSearch = {
  searchField: '',
  zipcode: '',

};

export const searchJobListing = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {
        searchField: action.payload,
      });
    case CHANGE_SEARCH_ZIPCODE:
      return Object.assign({}, state, {
        zipcode: action.payload,
      });
    default:
      return state;
  }
}

//new jobs reducer
const initialStateJobs = {
  isPending: false,
  jobData: [],
  isError: false
};

export const requestJobs = (state = initialStateJobs, action = {}) => {
  switch (action.type) {
    case FETCH_JOBS_PENDING:
      return Object.assign({}, state, {
        isPending: true,
      });
    case FETCHED_JOBS_SUCCESS:
      return Object.assign({}, state, {
        jobData: action.payload,
        isPending: false,
      });

    case FETCHED_JOBS_FAILED:
      return Object.assign({}, state, {
        isError: action.payload,
      });
    default:
      return state;
  }
}

//organizations reducer
const initialStateOrganizations = {
  orgsArePending: false,
  organizationData: [],
  orgsGetDataError: false
};

export const requestOrgs = (state = initialStateOrganizations, action = {}) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS_PENDING:
      return Object.assign({}, state, {
        orgsArePending: true,
      });
    case FETCHED_ORGANIZATIONS_SUCCESS:
      return Object.assign({}, state, {
        organizationData: action.payload,
        orgsArePending: false,
      });

    case FETCHED_ORGANIZATIONS_FAILED:
      return Object.assign({}, state, {
        orgsGetDataError: action.payload,
      });
    default:
      return state;
  }
}