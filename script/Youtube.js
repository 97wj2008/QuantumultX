/*
Youtube去广告
***************************
QuantumultX:
[rewrite_local]
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) url 302 $1$2$3
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/v\d\/player\/ad_break url reject
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject
[mitm]
hostname = -redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com
***************************/
