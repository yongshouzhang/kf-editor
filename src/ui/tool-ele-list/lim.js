define(function(){

    var first= ["\\lim\\placeholder", "\\min\\placeholder", "\\max\\placeholder",
     "\\lim_{x\\to \\infty}\\placeholder", "\\lim_\\placeholder\\placeholder", 
     "\\min_\\placeholder\\placeholder", "\\max_\\placeholder\\placeholder", 
     "\\lim_{x\\to 0} {\\frac {\\sin x} x} = 1 ", "\\lim_{x\\to \\infty } f \\left (x \\right )=A",
     "\\lim_{n\\to \\infty }({1+ \\frac 1 n})^n", "\\max_{0\\leq x \\leq} {xe}^{-x^2}"],
     second=["log{\\placeholder}", "ln{\\placeholder}", "lg{\\placeholder}",
      "log{_\\placeholder}{\\placeholder}",
      "log _a 1 = 0 ", "log _a a = 1 ", "{a ^{ log_a N} } \\emptyX = N ",
      "log_a M^n = nlog a^M ", "log_a (MN) = log_a M + log_a N", "log_a (M/N) = log_a M - log_a N"];
      var list=[first,second].map(function(tmp){
        return tmp.map(function(obj){
          return { item: { val: obj } };
      });

    });
     return [
       {
           title: "极限",
           content: list[0],
           offset: 0
       },
       {
           title: "对数",
           content: list[1],
           offset: 8
       }
   ];
});