var inputs = document.getElementsByTagName('input');   //获取所有input框
for (var i=0; i < inputs.length - 1; ++i){             //为每个事件input框添加失去焦点事件
    input[i].onblur = inputBlur;                     
}
function inputBlur(){
    var name = this.name;                //获取输入框name值
    var val = this.value;                //获取输入框value值
    var tips = this.placeholder;         //获取输入框的提示信息
    var tips_obj = this.parentNode.nextElementSibling;    //获取提示信息显示div元素对象
    val = val.trim();                    //1. 去掉两端的空白字符
    if (!val){                           //2.文本框内容为空，给出提示信息
        error(tips_obj, '输入框不能为空');
        return false;
    }

}
