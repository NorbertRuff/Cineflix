import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};
// this object contains the functions which handle the data and its reading/writing
export let dataHandler = {
    _data: {}, // cache
    _response: {},
    /**
     * Post method with axios, parses data and calls the callback with it
     * @param url
     * @param data
     * @param callback Optional / if no callback provided then returns
     * @param errorCallback Optional / if no callback provided then skips
     * @param loadingCallback Optional / if no callback provided then skips
     * @returns {{}}
     * @private
     */
    _api_post: function (url, data, callback, errorCallback, loadingCallback) {
        axios
            .post(url, data, {
                method: 'POST',
                headers: headers,
            })
            .then(response => {
                if (callback === undefined) {
                    this._response = response.data;
                } else {
                    callback(response.data);
                }
            })
            .catch((error) => {
                if (errorCallback !== undefined) {
                    errorCallback(error.message);
                }
                console.error(
                    `The request was made and the server responded with a status code that falls out of the range of 2xx `
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