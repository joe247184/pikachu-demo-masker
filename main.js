!function () {
    let speed = 50;
    let timeid
    function writeCode(prefix, code, callback) {
        let container = document.getElementById('code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;

        timeid = setTimeout(function run() {
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight;
            console.log(speed)
            if (n <= code.length) {
                timeid = setTimeout(run, speed)
                callback && callback()
            }
        }, speed)
    }
    let code = `
    /*今天准备画一只皮卡丘
     首先先画出皮卡丘的皮
    */
    .preview{
    height: 100%;
    /*    border: 1px solid green;*/
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fce54b;
}
.wrapper{
    width:100%;
    height: 190px;
    background: #fce54b;
    position: relative;
}
/*然后在画皮卡丘的鼻子*/
.nose{
    width: 0px;
    height: 0px;
    /* background: black;*/
    position: absolute;
    left:50%;
    top:28px;
    transform: translateX(-50%);/*这是css3的属性，方便计算*/
    /*margin-left:-11px;*/
    border-radius: 11px;
    border: 11px solid red;
    border-width: 12px 11px;
    /*border-color: red green yellow blue ;看看原始颜色*/
    border-color: black transparent transparent transparent;
    z-index:1;
}
/*接下来画皮卡丘眼睛*/
.eye{
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2e2e2e;
    position: absolute;
    border: 2px solid #000000;
}
/*眼睛里面的珠子*/
.eye::before{
    content:'';
    display:block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 6px;
    top: -1px;
    border: 2px solid #000000;
}
/*右眼在右边（废话）*/
.eye.right{
    left:50%;
    margin-left: 90px;
}
/*左眼在左边（废话连篇）*/
.eye.left{
    right:50%;
    margin-right: 90px;
}
/*然后再画皮卡丘的脸*/
.face{
    width: 68px;
    height: 68px;
    border: 2px solid black;
    background: #fc0d1c;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*脸颊要在正确的位置*/
.face.left{
    right:50%;
    margin-right: 116px
}
.face.right{
    left:50%;
    margin-left: 116px
}
/*  上嘴唇  */
.upperLip{
    height: 25px;
    width: 70px;
    border: 3px solid black;
    position: absolute;
    top: 50px;
    z-index:1;
    background: #fce54b;
}
.upperLip.left{
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
    right: 50%;
}
.upperLip.right{
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
    left: 50%;
}
/*卡卡的小舌头 */
.lowerLip-wrapper{
    position: absolute;
    left: 50%;
    margin-left: -60px;
    bottom: -3px;
    height: 136px;
    width: 120px;
    overflow: hidden;
    padding: 3px;
    /*    border: 1px solid red ;*/
}
.lowerLip{
    width: 120px;
    height: 2000px;
    border: 3px solid black;
    background: #990513;
    border-radius:150px/800px ;
    position: absolute;
    bottom: 0px;
    overflow: hidden;
}
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: 0;
    height:100px;
    width: 100px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
}
/*皮卡丘的10万伏特*/
img{
    
    position: absolute;
    bottom:10%;
    display:block;
}
/*好了，可爱的皮卡丘可以送给你了*/
    `
    writeCode('', code);

    $('input').on('click', function (e) {
        let $button = $(e.currentTarget)
        switch ($button.val()) {
            case '慢速':
                speed = 100;
                break;
            case '中速':
                speed = 60;
                break;
            case '快速':
                speed = 20;
                break;
            case '加速':
                if (speed >= 5) {
                    speed -= 5; break;
                }
                else {
                    alert('已到最快速了')
                    break;
                }

            case '减速':
                speed += 20;
                break;
            case '中断':
                console.log(code);
                $('#code').append(code);
                document.getElementById('code').scrollTop = document.getElementById('code').scrollHeight
                $('#styleTag').text(code);
                clearTimeout(timeid);
                console.log('中断了')
                break;
        }
        $(this).addClass('active').siblings().removeClass('active')
        /*  console.log(speed);*/

    })
}.call()