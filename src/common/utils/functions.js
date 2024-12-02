// function to get filter from query params
/**
 * Generates a filter object from the given query parameters.
 *
 * @param {Object} [queryParams={}] - The query parameters object.
 * @param {string|string[]} queryParams.key - The value(s) associated with each key in the query parameters.
 * @returns {Object} The filter object generated from the query parameters.
 */
export const _getFilterFromQueryParams = (queryParams = {}) => {
  const filter = {};
  // obtain the keys from the queryParams object
  for (const key in queryParams) {
    // check if the key exists in the queryParams object
    if (Object.hasOwnProperty.call(queryParams, key)) {
      const value = queryParams[key];

      // separate the values by comma
      const valueSplit = String(value).trim().split(',');

      // if the values is less than 1, skip the iteration
      if (valueSplit.length > 1) {
        // if the value is greater than 1, assign the valueSplit to the key
        filter[key] = valueSplit;
        continue;
      }
      // if the value is less than 1, assign the value to the key
      filter[key] = value;
    }
  }

  // return the filter object
  return filter;
};
