/*
 * @Author: your name
 * @Date: 2020-09-26 19:12:32
 * @LastEditTime: 2021-03-08 19:42:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \迷音e:\124作业集。。。。。。。。。。。。。。。。。\移动端\04-移动端开发\我的迷音\js\zhuce.js
 */

$('#diaj').click(function () {
    $.ajax({
        url: 'http://192.168.1.53:3000/users',
        type: "post",
        data: {
            type: 'register',
            phone: $('#zhs').val(),
            pass: $('#pass').val()
        },

        success:function(res) {
            console.log(res.ok);
            var input = document.getElementsByClassName('wwee')[0];
            var pass = document.getElementsByClassName('wwees')[0];
            if (res.ok == true) {
                input.innerHTML = res.msg
                setTimeout(function(){
                    location.href = "./login.html";
                },2000)
            
                
            } else {
                pass.innerHTML = res.msg;
                console.log(res);
            }

        },
     

    })

});