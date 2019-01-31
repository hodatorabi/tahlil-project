import axios from 'axios'
import humps from 'humps'
import {Constants} from '../constants'

let request = (store, url, params, method, data, loginRequired, decamelizeRequest) => {
    const baseURL = Constants.serverUrl

    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}
    if (loginRequired) {
        headers = {...headers, 'Authorization': 'JWT ' + store.auth.token}
    }
    let request = {
        url,
        method,
        baseURL,
        headers,
        params,
        transformRequest: [function (data, headers) {
            if (decamelizeRequest) {
                return JSON.stringify(humps.decamelizeKeys(data))
            }
            return JSON.stringify(data)
        }],
        transformResponse: [function (data) {
            return humps.camelizeKeys(JSON.parse(data))
        }],
        timeout: 10000,
        maxContentLength: 2000,
    }
    if (method !== 'get') {
        request.data = data
    }
    return axios(request).then((response) => {
        if (response.status >= 300) {
            return Promise.reject({response})
        }
        return response.data
    }).catch(error => {
        if (error.response) {
            return Promise.reject(error.response.data)
        } else if (error.request) {
            return Promise.reject({
                errorType: 'Unknown',
                errorMessage: error,
                detail: {}
            })
        } else {
            return Promise.reject({
                errorType: 'Unknown',
                errorMessage: error,
                detail: {}
            })
        }
    })
}

const Request = {
    get: (store, url, params = {}, data = {}, loginRequired = true, decamelizeRequest = true) =>
        request(store, url, params, 'get', {}, loginRequired, decamelizeRequest),
    post: (store, url, params = {}, data = {}, loginRequired = true, decamelizeRequest = true) =>
        request(store, url, params, 'post', data, loginRequired, decamelizeRequest),
    put: (store, url, params = {}, data = {}, loginRequired = true, decamelizeRequest = true) =>
        request(store, url, params, 'put', data, loginRequired, decamelizeRequest),
    patch: (store, url, params = {}, data = {}, loginRequired = true, decamelizeRequest = true) =>
      request(store, url, params, 'patch', data, loginRequired, decamelizeRequest),
    delete: (store, url, params = {}, data = {}, loginRequired = true, decamelizeRequest = true) =>
        request(store, url, params, 'delete', {}, loginRequired, decamelizeRequest),
}

export default Request
