class ApiService {
    baseUrl = `http://${window.location.hostname}:3001/api`;
    headers = {
        "content-type": "application/json"
    };

    async getTerms(terms) {
        const endpoint = "/search";
        const url = `${this.baseUrl}${endpoint}?terms=${terms}`;

        try {
            const response = await fetch(url, {
                method: "get",
                headers: this.headers
            });

            const data = await response.json();
            return data;
        } catch (e) {}
    }
}

export default new ApiService();
