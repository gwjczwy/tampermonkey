// ==UserScript==
// @name         去转盘网免登陆直接跳转
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        http://www.quzhuanpan.com/download/detail.action?id=*
// @grant        none
// @supportURL   https://github.com/gwjczwy/tampermonkey
// ==/UserScript==

(function() {
    'use strict';
    var pass="";
    //如果有密码 直接附加在网盘链接里
    if (document.getElementsByClassName('list-group-item')[6].textContent.lastIndexOf('密码') != -1){
        pass=document.getElementsByClassName('list-group-item')[6].textContent.slice(5,9)
    }
    //跳转到百度网盘界面
    window.location.href=document.getElementById('downloadHandler').getAttribute('data-downloadurl')+"#密码是"+pass;
})();