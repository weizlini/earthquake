import axios from "axios";
/**
 * we wouldn't normally use a function to load up site data like this
 * the data is too heterogeneous -- it includes user information
 * as well as the other site data which would probably have been split into
 * several API methods -- one of which would have been a login or a refreshing
 * of the JWT token
 *
 * We probably *would* be using something like axios rather than fetch
 */

/**
 * this is just bogus caching
 */
let data = null;

const getSiteData = async () => {
  if (!data) {
    const response = await axios.get("/data.json");
    data = response.data;
  }
  return data;
};
export default getSiteData;
