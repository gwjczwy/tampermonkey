// ==UserScript==
// @name         ���־ۺ��������� ��������
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.gequdaquan.net/gqss/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //��Դ�����пٳ�����check����,���������ش����Ƿ��Ѵ����� ���Ҹ������������ض���һ��   ( ?�� ?? ?��)
    //����ķ���̫�鷳��
    //ΪhtmlԪ����Ӹ� onmousemove ���� ,��궯һ�¾Ͱ����ش����ָ�Ϊ 0
    document.getElementsByTagName('html').setAttribute('onmousemove','window.localStorage.setItem("authDownNum", 0);');
    window.localStorage.getItem("authDownNum");
/*
window.localStorage.setItem("authDownNum", 0);  //�������ش���Ϊ��
window.localStorage.getItem("authDownNum");     //�鿴��ǰ���ش���
//��Щ��ûɶ����
var s=document.getElementsByClassName("icon-download")   //��ȡ���ذ�ť
s[0].setAttribute('onclick','window.localStorage.setItem("authDownNum", 0);'); Ϊ���ذ�ť������ش������㷽��
*/


})();