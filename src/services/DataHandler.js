const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const config = {
    method: "GET",
    headers: headers
}

export let dataHandler = {
    /**
     * Cache
     * @private
     */
    _data: {},
    /**
     * Response cache
     * @private
     */
    _response: {},
    /**
     * Get method with axios, calls the callback function with response
     * @param url
     * @param callback Optional / if no callback provided then returns
     * @param errorCallback Optional / if no callback provided then skips
     * @param loadingCallback Optional / if no callback provided then skips
     * @returns {{}} if @param callback undefined
     * @private
     */
    _api_get: function (url, callback, errorCallback, loadingCallback) {
        loadingCallback(true)
        fetch(url, config)
            .then(response => response.json())
            .then((json_response) => {
                if (callback !== undefined) {
                    callback(json_response);
                }
            })
            .catch((error) => {
                if (errorCallback !== undefined) {
                    errorCallback(error.message);
                }
                console.error(
                    `The request was made and the server responded with a status code that falls out of the range of 2xx. Message: ` + error.message
                );
            })
            .finally(() => {
                if (loadingCallback !== undefined) {
                    loadingCallback(false)
                }
            });
    },
    /**
     * Post method with axios, parses data and calls the callback with it
     * @param url
     * @param data
     * @param callback Optional / if no callback provided then returns
     * @param errorCallback Optional / if no callback provided then skips
     * @param loadingCallback Optional / if no callback provided then skips
     * @returns {{}} if @param callback undefined
     * @private
     */
    _api_post: function (url, data, callback, errorCallback, loadingCallback) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: data,
        })
            .then(response => response.json())
            .then(json_response => {
                if (callback === undefined) {
                    this._response = json_response;
                } else {
                    callback(json_response);
                }
            })
            .catch((error) => {
                if (errorCallback !== undefined) {
                    errorCallback(error.message);
                }
                console.error(
                    `The request was made and the server responded with a status code that falls out of the range of 2xx. Message: `
                    + error.message
                );
            })
            .finally(() => {
                if (loadingCallback !== undefined) {
                    loadingCallback(false)
                }
            });
        if (callback === undefined) {
            return this._response
        }
    }
}