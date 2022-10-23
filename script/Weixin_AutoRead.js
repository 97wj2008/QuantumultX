/*
微信自动阅读
*************************
[QuantumultX]:
[rewrite_local]
^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://raw.githubusercontent.com/97wj2008/QuantumultX/main/script/Weixin_AutoRead.js
[mitm]
hostname = mp.weixin.qq.com
*************************/

var body = $response.body
    .replace(/<\/script>/, 'window.onload=()=>{setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,8000);setTimeout(()=>window.history.back(),3000);},2500);},2500);},2500);},3000);};</script>');
$done({ body });
