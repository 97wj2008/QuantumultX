/*

【QuantumultX】 :
*************************
[rewrite_local]
^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body Weixin_AutoRead.js
*************************

[mitm]
hostname = mp.weixin.qq.com

*************************

var body = $response.body
    .replace(/<\/script>/, 'setTimeout(()=>window.history.back(),8000); </script>');
$done({ body });

*************************
#微信自动阅读
hostname = mp.weixin.qq.com
^https?://mp\.weixin\.qq\.com/s.+? url response-body </script> response-body window.onload=()=>{setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,8000);setTimeout(()=>window.history.back(),3000);},2500);},2500);},2500);},3000);};</script>
**************************

*/

var body = $response.body
    .replace(/<\/script>/, 'window.onload=()=>{setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,1000);setTimeout(()=>{window.scrollBy(0,8000);setTimeout(()=>window.history.back(),3000);},2500);},2500);},2500);},3000);};</script>');
$done({ body });