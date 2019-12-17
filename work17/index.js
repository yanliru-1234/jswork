var inputs = document.getElementsByTagName('input')  //获取所有input框
for (var i = 0; i < inputs.length - 1; ++i) {       //为每个input框添加失去焦点事件
    inputs[i].onblur = inputBlur
}
function inputBlur() {
    var name = this.name      //获取输入框name值
    var val = this.value        //获取输入框val值
    var tips = this.placeholder   //获取输入框中的提示信息
    var tips_obj = this.parentNode.nextElementSibling    //获取提示信息显示的div元素对象
    console.log(tips_obj)
    val = val.trim()
    if (!val) {
        error(tips_obj, '输入框不能为空')
        return false
    }
    var reg_msg = getRegMsg(name, tips)
    if (reg_msg['reg'].test(val)) {
        success(tips_obj, reg_msg['msg']['success'])
    } else {
        error(tips_obj, reg_msg['msg']['error'])
    }
}
function getRegMsg(name, tips) {
    var reg = msg = ''
    //zxd
    switch (name) {
        case 'username':
            reg = /^[a-zA-Z]{4,12}$/
            msg = {'success': '用户名输入正确', 'error': tips};
            break;
        case 'pwd':
            reg = /^\w{6,20}$/;
            msg = {'success': '密码输入正确', 'error': tips};
            break;
        case 'repwd':
            var con = document.getElementsByTagName('input')[1].value;
            reg = RegExp("^" + con + "$");
            msg = {'success': '两次密码输入正确', 'error': '两次输入的密码不一致'};
            break;
        case 'tel':
            reg = /^1[34578]\d{9}$/;
            msg = {'success': '手机号码输入正确', 'error': tips};
            break;
        case 'email':
            reg = /^(\w+(\_|\-|\.)*)+@(\w+(\-)?)+(\.\w{2,})+$/;
            msg = {'success': '邮箱输入正确', 'error': tips};
            break;
    }
           return {
               'reg': reg, 'msg': msg
            }
}
                function success(obj, msg) {
                  obj.className = 'success'
                  obj.innerHTML = msg
}
                function error(obj, msg) {
                 obj.className = 'error'
                 obj.innerHTML = msg + '，请重新输入'
}