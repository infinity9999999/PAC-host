function user_proxy(url, host){

if ( shExpMatch(host, "*.apple.com")
 ||  shExpMatch(host, "*.icloud.com")
 ||  shExpMatch(host, "clomo.com")
 ||  shExpMatch(host, "mdm.clomo.com")
 ||  shExpMatch(host, "*.jamfcloud.com")
 ||  shExpMatch(host, "www.nhk.or.jp")
 ||  shExpMatch(host, "x.com") 
 ||  shExpMatch(host, "*.x.com")){
    return "DIRECT";
}

return "PROXY 127.0.0.1:8080";

}


function FindProxyForURL(url, host){

if( shExpMatch(host, "*.digitalartscloud.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "albert.apple.com") ||
    shExpMatch(host, "captive.apple.com") ||
    shExpMatch(host, "gs.apple.com") ||
    shExpMatch(host, "humb.apple.com") ||
    shExpMatch(host, "static.ips.apple.com") ||
    shExpMatch(host, "*.push.apple.com") ||
    shExpMatch(host, "gdmf.apple.com") ||
    shExpMatch(host, "deviceenrollment.apple.com") ||
    shExpMatch(host, "deviceservices-external.apple.com") ||
    shExpMatch(host, "identity.apple.com") ||
    shExpMatch(host, "iprofiles.apple.com") ||
    shExpMatch(host, "mdmenrollment.apple.com") ||
    shExpMatch(host, "setup.icloud.com") ||
    shExpMatch(host, "vpp.itunes.apple.com") ||
    shExpMatch(host, "appldnld.apple.com") ||
    shExpMatch(host, "gg.apple.com") ||
    shExpMatch(host, "mesu.apple.com") ||
    shExpMatch(host, "updates-http.cdn-apple.com") ||
    shExpMatch(host, "updates.cdn-apple.com") ||
    shExpMatch(host, "xp.apple.com") ||
    shExpMatch(host, "*.itunes.apple.com") ||
    shExpMatch(host, "*.apps.apple.com") ||
    shExpMatch(host, "*.mzstatic.com") ||
    shExpMatch(host, "itunes.apple.com") ||
    shExpMatch(host, "ppq.apple.com") ||
    shExpMatch(host, "crl.apple.com") ||
    shExpMatch(host, "crl.entrust.net") ||
    shExpMatch(host, "crl3.digicert.com") ||
    shExpMatch(host, "crl4.digicert.com") ||
    shExpMatch(host, "ocsp.apple.com") ||
    shExpMatch(host, "ocsp.digicert.com") ||
    shExpMatch(host, "ocsp.entrust.net") ||
    shExpMatch(host, "ocsp.verisign.net") ||
    shExpMatch(host, "gateway.icloud.com") ||
    shExpMatch(host, "*keyvalueservice.icloud.com") ||
    shExpMatch(host, "testflight.apple.com") ||
    shExpMatch(host, "zoom.us") ||
    shExpMatch(host, "*.zoom.us") ||
    shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.lync.com") ||
    shExpMatch(host, "*.teams.microsoft.com") ||
    shExpMatch(host, "teams.microsoft.com") ||
    shExpMatch(host, "*.teams.microsoft.us") ||
    shExpMatch(host, "*.skype.com") ||
    shExpMatch(host, "*fmip.icloud.com") ||
    shExpMatch(host, "cdn2.scratch.mit.edu") ||
    shExpMatch(host, "cdn.assets.scratch.mit.edu") ||
    shExpMatch(host, "assets.scratch.mit.edu") ||
    shExpMatch(host, "nhk-vh.akamaihd.net") ||
    shExpMatch(host, "nhks-vh.akamaihd.net") ||
    shExpMatch(host, "loilonote-assets.loilo.tv") ||
    shExpMatch(host, "kh.google.com") ||
    shExpMatch(host, "cu-video-cdn.tbs.co.jp") ||
    shExpMatch(host, "vod-stream.nhk.jp") ||
    shExpMatch(host, "media.vd.st.nhk") ||
    shExpMatch(host, "archive.hsk.st.nhk") ||
    shExpMatch(host, "simul.hsk.st.nhk") ||
    shExpMatch(host, "simul.drdi.st.nhk") ||
    shExpMatch(host, "v01.mediadelivery.st.nhk") ||
    shExpMatch(host, "abc-live00.ipcasting.jp") ||
    shExpMatch(host, "abc-live01.ipcasting.jp") ||
    shExpMatch(host, "fonts.gstatic.com") ||
    shExpMatch(host, "font-public.canva.com") ||
    shExpMatch(host, "iphonesubmissions.apple.com") ||
    shExpMatch(host, "probe.icloud.com") ||
    shExpMatch(host, "pong.icloud.com") ||
    shExpMatch(host, "metrics.icloud.com") ||
    shExpMatch(host, "apple-native-relay.apple.com") ||
    shExpMatch(host, "*.vk-live.asahi.co.jp"))
{
    return "DIRECT";
}


return user_proxy(url, host);

}