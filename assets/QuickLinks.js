function travelling(){
    var url=new Array();

    url[0]="https://github.com/muzihuaner/QuickLinks";
    url[1]="https://quickso.cn";
    url[2]="https://huangenet.cn";
    url[3]="https://zhiurl.cn";
    url[4]="https://blog.quickso.cn/";
    url[5]="https://www.fwder.cn/"; 
    url[6]="https://moelinks.top/"; 
   


    if (document.referrer) {
      var origin = new URL(document.referrer).origin;
      url.splice(url.indexOf(origin), 1);
    }
    
    
    var ints=Math.floor(Math.random() * url.length);
    window.location=url[ints];
   }
