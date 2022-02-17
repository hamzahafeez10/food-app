import axios from "axios";

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer MF3SgdWm7IqHWQee9IROHOnwBVsVvZdKNP2FGyKrPq0OGVzuPP_gV1fGUWlibRWc_dxNTeRd1egPOtcbSF2mE0VMfRC1Rjk9yI7EFcXDMDVFwFQ88IGaa7K0CyYNYnYx'
    }
});