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

export const getList = (data) => {
    return http.get(
        'https://www.showapi.com/apiGateway/generateSignUrl?showapi_apiCode=1824',
        // 'http://route.showapi.com/1824-1?showapi_appid=700827&showapi_sign=c7e602c529914aacb731312a9b470751',
        {
            showapi_test_draft: '',
            showapi_pointId: '5c85e89b0cf264dbee6b30db',
            showapi_pointCode: 1,
            showapi_appid: 700827,
            showapi_sign: 'ab24e3271177d5dd3f06df7d2957fc47',
            showapi_timestamp: 20210710151854,
            col: 7,
            page: 1,
            num: 10,
            ...data

        }
        // data
    )
};