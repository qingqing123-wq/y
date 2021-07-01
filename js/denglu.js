/*
 * @Author: your name
 * @Date: 2021-03-08 21:59:27
 * @LastEditTime: 2021-03-11 15:38:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \我的找房无忧e:\作业131\我的迷音\js\denglu.js
 */
$('#diaj').click(function () {
        $.ajax({
            url: 'http://192.168.1.53:3000/users',
            type: "post",
            data: {
                type: 'login',
                phone: $('#zhs').val(),
                pass: $('#pass').val()
            },
            success(res) {
              var input=document.getElementsByClassName('wwee')[0];
              var pass = document.getElementsByClassName('wwees')[0];
              if(res.ok==true){
                  location.href = "./index.html";
                  input.innerHTML=res.msg
              }else{
                  pass.innerHTML=res.msg;
              }
              
            }
        })
});