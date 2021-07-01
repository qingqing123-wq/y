/*
 * @Author: your name
 * @Date: 2020-09-23 10:57:24
 * @LastEditTime: 2021-03-11 09:17:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \9-2c:\Users\wangyujie\Desktop\zuoye\zuoyeer\register\rem.js
 */

(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 750 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})();
