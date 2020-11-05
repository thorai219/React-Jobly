import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {

    let _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U"

    console.debug("API Call:", endpoint, params, verb);

    let searchQuery;
    if (verb === "get") {
      searchQuery = axios.get(
        `${BASE_URL}/${endpoint}`, { params: { _token, ...params } }
      )
    }

    try {
      return (await searchQuery).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }
    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(handle) {
    let res = await this.request(`companies`, { handle })
    return res.companies
  }
}

export default JoblyApi