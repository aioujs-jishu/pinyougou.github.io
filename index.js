window.onload = function() {



    //轮播图模块



    //秒杀模块
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute");
    var second = document.querySelector(".second");
    var inputTime = +new Date("2022-12-30 23:00:00"); //倒计时的结束时间，自己设置时间
    countDown(); //先调用一次这个函数 防止第一次刷新页面有空白
    //2、开启定时器
    setInterval(countDown, 1000); //1000毫秒，每一秒钟调用一次函数
    //3、倒计时-时分秒函数
    function countDown() {
        var nowTime = +new Date(); //返回的是当前时间的总的毫秒数
        var times = (inputTime - nowTime) / 1000; // times是剩余时间的总的毫秒数
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h; //判断数值小于10的情况 如 0-9改为 00-09
        hour.innerHTML = h; //更改div里面的内容 把h给获取元素hour的内容
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? "0" + m : m;
        minute.innerHTML = m; //同上
        var s = parseInt(times % 60);
        s = s < 10 ? "0" + s : s;
        second.innerHTML = s; //同上
    }

    //精灵图部分

    var lifeservice_lis = document.querySelector('.lifeservice').querySelectorAll('i');
    for (var i = 0; i < lifeservice_lis.length; i++) {
        var index = i * 44;
        lifeservice_lis[i].style.backgroundPosition = '0-' + index + 'px'
    }

    // 家电楼层Tab栏切换
    var tab_list = document.querySelector('.box_hd').querySelectorAll('li');

    var items = document.querySelectorAll('.item');
    for (var i = 0; i < tab_list.length; i++) {
        tab_list[i].setAttribute('index', i);
        tab_list[i].onclick = function() {
            for (var i = 0; i < tab_list.length; i++) {
                tab_list[i].className = '';
            }
            this.className = 'style_red';
            //下面
            var index = this.getAttribute('index');
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';

        }


    }

}