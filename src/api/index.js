import Axios from 'axios'
import Qs from 'qs' // data序列化 form提交
let d = {}

/**
 * _type : 0->json传输， 1->input上传 file 2->表单提交
 * */
d.axios = function(_method, _path, _type, _data) {
    switch (_type) {
        case 0: // json
            _content = 'application/json'
            break;
        case 1: // 上传 图片或文件
            _content = 'multipart/form-data'
            break;
        case 2: // 表单
            _content = 'application/x-www-form-urlencoded'
            _data = Qs.stringify(_data)
            break;
        default:
            break;
    }
    return Axios.request({
        method: _method,
        url: _path,
        data: _data,
        baseURL: "",
        headers: {
            'Conten-Type': _content,
            'Access-Control-Allow-Origin': '*'
        }
    })
}

export default d