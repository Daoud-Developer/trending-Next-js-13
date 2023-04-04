import { parametersFormatted } from "../utils/parameters";
class NewsAPI {
    constructor() {
        this.BASE_URL = process.env.NEXT_PUBLIC_API_URL;
        this.defaultParameters = {
            page: 1,
            pageSize: 10,
            country: "us",
            category: "general",
        };
    }
    async makeAPIRequest(endpoint, parameters = this.defaultParameters) {
        const response = await fetch(`${this.BASE_URL}/${endpoint}?${parametersFormatted(parameters)}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
        return response.json();
    }
    async getTopHeadlines(options) {
        Object.assign(this.defaultParameters, options);
        return this.makeAPIRequest("top-headlines", this.defaultParameters);
    }
    async getAllSources() {
        const { category, ...options } = this.defaultParameters;
        return this.makeAPIRequest("top-headlines/sources", options);
    }
    async getEverything(options) {
        return this.makeAPIRequest("everything", options);
    }
}
const newsApi = new NewsAPI();
export default newsApi;
