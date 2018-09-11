import api from "./index";
let d = {};

let type = 2; // 0->json传输， 1->input上传 file 2->表单提交
/**
 * 登录
 * 必填： username用户账号、passwd密码
 */
d.login = {
    data: {},
    post() {
        let path = "user/login";
        return api.axios("POST", path, type, this.data);
    }
};

export default d;