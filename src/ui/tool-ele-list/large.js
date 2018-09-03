define(function(){

    var first=["\\sum{^\\placeholder_\\placeholder \\placeholder}", "\\sum{_\\placeholder\\placeholder}", 
    "\\sumv\\placeholder", "\\sumv^\\placeholder_\\placeholder\\placeholder", 
    "\\sumv{^\\placeholder_\\placeholder\\placeholder}", "\\sumv{_\\placeholder}\\placeholder", 
    "\\sumv{_\\placeholder\\placeholder}", "\\sumv^\\placeholder_\\placeholder\\placeholder", 
    "\\suma^\\placeholder_\\placeholder\\placeholder", "\\suma{^\\placeholder_\\placeholder\\placeholder}", 
    "\\suma_\\placeholder\\placeholder", "\\suma{_\\placeholder\\placeholder}", "\\sumn^n_{i=0}\\placeholder",
     "\\sum_k( \\matrixH n k )", " {\\sum _\\matrixH  {0\\leq i\\leq m} {0\\leq j \\leq n}  {  P( \\matrixH i j )}}", 
    "{\\sum_\\placeholder\\placeholder}", "\\sum\\placeholder", "\\sum^\\placeholder_\\placeholder\\placeholder"],
    second= ["\\xcup{\\placeholder}", "\\xcup{_\\placeholder\\placeholder}", "\\xcup_{\\placeholder}{\\placeholder}", 
    "\\xcup^{\\placeholder}_{\\placeholder}{\\placeholder}", "\\xcup{_\\placeholder^\\placeholder\\placeholder}",
     "\\xcap{\\placeholder}", "\\xcap{_\\placeholder\\placeholder}", "\\xcap_{\\placeholder}{\\placeholder}",
      "\\xcap^{\\placeholder}_{\\placeholder}{\\placeholder}", "\\xcap{_\\placeholder^\\placeholder\\placeholder}", 
      "\\xcup^m_{n=1}{(x_n\\cap y_n)}"],
    third=["\\xsqcap{_\\placeholder^\\placeholder\\placeholder}", "\\xsqcap{\\placeholder}", 
    "\\xsqcap{_\\placeholder\\placeholder}", "\\xsqcap_{\\placeholder}{\\placeholder}",
     "\\xsqcap^{\\placeholder}_{\\placeholder}{\\placeholder}", "\\xsqcup{\\placeholder}", 
     "\\xsqcup{_\\placeholder\\placeholder}", "\\xsqcup^{\\placeholder}_{\\placeholder}{\\placeholder}",
      "\\xsqcup_{\\placeholder}{\\placeholder}",
     "\\xsqcup {^\\placeholder_\\placeholder\\placeholder}", "\\xsqcap^n_{k=1}{A_k}"];
     var list=[first,second,third].map(function(tmp){
         return tmp.map(function(obj){
           return { item: { val: obj } };
       });
     });
      return [
        {
            title: "求和符号",
            content: list[0],
            offset: 0
        },
        {
            title: "交集并集",
            content: list[1],
            offset: 8
        },
        {
            title: "乘积副集",
            content: list[2],
            offset: 8
        }
    ];

});