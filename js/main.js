/**
 * Created by lenovo on 17/12/5 005.
 */
/*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
/*音乐处理开始*/
var musci=document.getElementById("music");
var musicbg=document.querySelectorAll(".musicbg")[0];
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio=document.querySelector("audio");//querySelector：找的是标签
var flag=1;
music.onclick=function(){
    if(flag==1){
        musicbg.style.display="none";/*改变样式隐藏*/
        musicImg.style.animation="none";/*停止动画*/
        audio.pause();//停止播放
        flag=0;
    }else{
        musicbg.style.display="block";/*改变样式显示*/
        musicImg.style.animation="music 2s linear infinite";/*动画执行*/
        audio.play();//播放
        flag=1;
    }
}
/*表单验证开始*/
function checkName(){
    var name=document.getElementById("name").value;
    if(name.length<2){
        document.getElementById("nameSpan").innerHTML="不能少于两位";
    }else{
        document.getElementById("nameSpan").innerHTML="正确";
    }
}
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var a=/^1\d{10}$/;
    if(!a.test(phone)){
        document.getElementById("phoneSpan").innerHTML="不符合规范";
    }else{
        document.getElementById("phoneSpan").innerHTML="正确"
    }
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(email)){
        document.getElementById("emailSpan").innerHTML="不符合规范"
    }else{
        document.getElementById("emailSpan").innerHTML="正确"
    }
}
function checkAll(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    if(name==""||phone==""){
        alert("用户名和手机号必填")
    }else{
        alert("提交成功");
        return false; //页面不跳转、
    }
}
/*表单验证结束*/
