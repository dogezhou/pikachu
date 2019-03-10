!function(){
    var duration = 20
    function writeCss(prefix, code, callback) {
        var container = document.querySelector('#code')
        
        var styleTag = document.querySelector('#styleTag')
        var n = 0
        // var timer = setInterval(() => {
        //     n += 1
        //     container.innerHTML = code.substring(0, n)
        //     styleTag.innerHTML = code.substring(0, n)
        //     container.scrollTop = container.scrollHeight
        //     if (n >= code.length) {
        //         window.clearInterval(timer)
        //         callback && callback()
        //     }
        // }, 10);
        setTimeout(function fn() {
            n += 1
            container.innerHTML = code.substring(0, n)
            hljs.highlightBlock(container)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(fn, duration)
            } else {
                callback && callback()
            }
        }, duration);
    }

    var css = `
/*
 * 我叫 dogezhou
 * 今天来画一个皮卡丘，
 * 首先画它的皮
 */
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}

.wrapper {
    position: relative;
    width: 100%;
    height: 165px;
}

/* 
 * 再画鼻子 
 */
.nose {
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 28px;
    border-radius: 11px;
    border: 12px solid;
    border-color: black transparent transparent transparent;
}

/* 
 * 再画眼睛 
 */
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
}

/* 
 * 再画眼珠子 
 */
.eye::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: 1px;
    border: 2px solid black;
}

/* 
 * 左眼放到左边 
 */
.eye.left {
    right: 50%;
    margin-right: 90px;
}

/* 
 * 右眼放到右边 
 */
.eye.right {
    left: 50%;
    margin-left: 90px;
}

/* 
 * 然后画皮卡丘的脸
 */
.face {
    position: absolute;
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    top: 85px;
}
.face.left {
    right: 50%;
    margin-right: 116px;
}
.face.right {
    left: 50%;
    margin-left: 116px;
}

/* 
 * 然后画皮卡丘的嘴
 */
.upperLip {
    position: absolute;
    height: 25px;
    width: 80px;
    border: 3px solid black;
    border-top: none;
    top: 47px;
    background: #fee433;
}
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    transform: rotate(20deg);
}

/* 
 * 最后画皮卡丘的舌头
 */
.lowerLip-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 113px;
    overflow: hidden;
    width: 200px;
}
.lowerLip-wrapper .lowerLip {
    width: 200px;
    height: 2500px;
    background: #990513;
    border-radius: 100px/700px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}
.lowerLip-wrapper .lowerLip::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
}
/* duang! */    
.preview-wrapper {
    transform:rotate(360deg);
}

/* 一只皮卡丘！谢谢观看！*/
    `
    writeCss('', css)

    // 调速
    $('.actions').on('click', 'button', function(e) {
        var $button = $(e.currentTarget)
        var speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}();