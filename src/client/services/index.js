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

            if (response.status === 200) {
                const data = await response.json();
                return data;
            } else {
                alert("There was an error");
            }
        } catch (e) {
            alert("There was an error");
        }
    }

    async getTerms(terms, geo) {
        const endpoint = "/search";
        const url = `${this.baseUrl}${endpoint}?terms=${terms}&geo=${geo}`;

        try {
            const response = await fetch(url, {
                method: "get",
                headers: this.headers
            });

            if (response.status === 200) {
                const data = await response.json();
                return data;
            } else {
                alert("There was an error");
            }
        } catch (e) {
            alert("There was an error");
        }
    }
}

export default new ApiService();
