class ApiService {
    baseUrl = `http://${window.location.hostname}:3001/api`;
    headers = {
        "content-type": "application/json"
    };

    async postConfiguration() {
        const endpoint = "/configuration";
        const url = `${this.baseUrl}${endpoint}`;

        try {
            const response = await fetch(url, {
                method: "post",
                headers: this.headers
            });

            const data = await response.json();
            return data;
        } catch (e) {}
    }

    async getTerms(terms, geo) {
        const endpoint = "/search";
        const url = `${this.baseUrl}${endpoint}?terms=${terms}&geo=${geo}`;

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
