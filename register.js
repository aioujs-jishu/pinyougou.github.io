window.onload = function() {
    //手机验证码
    var btn_yz = document.querySelector('.btn_yz')
    var time_yz = 59;
    //注册密码验证开始
    var eye_1 = document.querySelector(".eye_1");
    var eye_2 = document.querySelector(".eye_2");
    var flag = 0;
    var psd_1 = document.querySelector('.psd_1');
    var psd_2 = document.querySelector('.psd_2');
    btn_yz.addEventListener('click', function() {
        btn_yz.disabled = true;
        var timer = setInterval(function() {
            if (time_yz == 0) {
                clearInterval(timer);
                btn_yz.style.backgroundColor = '#4e6ef2';


                btn_yz.disabled = false;
                btn_yz.innerHTML = '发送验证码';


                time_yz = 59;
            } else {

                btn_yz.innerHTML = '' + time_yz + '秒后可重新获取';
                btn_yz.style.backgroundColor = '#77abf4';
                time_yz--;
            }
        }, 1000)
    })


    eye_1.onclick = function() {
        if (flag == 0) {
            psd_1.type = "text";
            eye_1.src = "images/查看.png"
            flag = 1;

        } else {
            eye_1.src = "images/隐藏.png"
            psd_1.type = "password";
            flag = 0;

        }

    }

    //确认密码
    eye_2.onclick = function() {
            if (flag == 0) {
                psd_2.type = "text";
                eye_2.src = "images/查看.png"
                flag = 1;

            } else {
                eye_2.src = "images/隐藏.png"
                psd_2.type = "password";
                flag = 0;

            }

        }
        //注册密码结束

}