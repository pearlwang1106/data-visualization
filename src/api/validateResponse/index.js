// import Vue from 'vue';

export default function(response) {
    switch(response.code) {
        case 302:
            return Promise.reject(response)
        // case 0:
        //     Vue.prototype.$notify({
        //         type: 'error',
        //         message: response.msg
        //     })
        //     return Promise.reject(response);
    }
    return response
}