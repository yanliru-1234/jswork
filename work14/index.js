//let endseconds =  - new Date().getMinutes();

let d = h = m = s = 0;

let id = setInterval(seckill, 1000);

function seckill() {
    let endseconds = new Date().getMinutes();
    let nowtime = new Date();
    let remaining = parseInt((60 - endseconds) *60);
    var xs =  nowtime.getSeconds();
    var ms = parseInt(60 - xs);//这里获取倒计时的秒数 
    console.log(ms);
    //console.log(ms);为什么是Nan？？？？ 这里是控制台第二个数字
    if (remaining > 0) {
        d = parseInt(remaining / 86400);
        h = parseInt((remaining / 3600) % 24);
        m = parseInt((remaining / 60) % 60);
        s = parseInt(ms);
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    } else {
        clearInterval(id);//秒杀过期就取消
        d = h = m = s ='00';
    }
//将剩下的时间显示在指定的位置中
document.getElementById('d').innerHTML = d + '天';
document.getElementById('h').innerHTML = h + '时';
document.getElementById('m').innerHTML = m + '分';
document.getElementById('s').innerHTML = s + '秒';
}