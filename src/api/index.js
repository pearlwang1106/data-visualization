import http from './http.js';
/** get demo */
export function getDemoData(url = '', data = {}) {
    return http.get(
        url,
        data
    )
}
/** post demo */
export function postDemoData(url = '', data = {}) {
    return http.post(
        url,
        data
    )
}