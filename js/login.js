window.onload = function() {
    var psd_login = document.querySelector('.psd_login');
    var eye_1 = document.querySelector(".eye_1");
    var flag = 0;
    eye_1.onclick = function() {
        if (flag == 0) {
            psd_login.type = 'text';
            this.src = 'images/查看.png';
            flag = 1;
        } else {
            eye_1.src = "images/隐藏.png"
            psd_login.type = "password";
            flag = 0;
        }
    }
}