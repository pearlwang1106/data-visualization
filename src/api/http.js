import Vue from "vue";
import axios from "axios-jsonp-pro";
import validateResponse from './validateResponse'

const NODE_ENV = process.env.NODE_ENV;

const config = {
    mockHost: '/',
    onlineHost: "/"
}

const http = axios.create({
    baseURL: NODE_ENV === "production" ? config.onlineHost : config.mockHost,
    // timeout: 10000,
    withCredentials: true,
    headers: {}
})

http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Vue.prototype.$notify({
            type: 'error',
            title: '错误',
            message: '服务器累趴了，请稍后重试~'
        })

        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        response = response.config ? response.data : response;
        try {
            if(typeof response === 'string') {
                response = eval("(" + response + ")");
            }
        } catch(e) {
            console.log(e)
        }
        
        return validateResponse(response);
    },
    error => {
        Vue.prototype.$notify({
            type: 'error',
            title: '错误',
            message: '网络异常，请稍后重试~'
        })

        return Promise.reject(error);
    }
)

/**
 * [get]
 * @param {*} url           [资源路径]
 * @param {*} data          [发送数据, json 格式]
 * @param {*} apiId         [MockId]
 * @return {[Promise]}
 */
function get (url, data) {
    return http.get(url, {
        params: data
    })
}

/**
 * [post]
 * @param {*} url           [资源路径]
 * @param {*} data          [发送数据, json 格式]
 * @param {*} apiId         [MockId]
 * @return {[Promise]}
 */
function post (url, data) {
    // return http.post(url, data, {
    //     headers: {
    //         "Content-Type": "multipart/form-data",
    //     }
    // })
    return http.post(url, data, {
        transformRequest: [
            function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                ret = ret.substring(0, ret.lastIndexOf('&'));
                return ret
            }
        ],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

    })
}

function jsonp(url, data) {
    return http.jsonp(url, {
        params: data
    });
}

export default {
    get,
    post,
    jsonp
}