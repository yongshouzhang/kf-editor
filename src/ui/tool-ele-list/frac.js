define(function(require){
    var latex = 
    ["\\frac \\placeholder \\placeholder",
     "\\placeholder / \\placeholder",
      "\\frac \\pi 2",
      "\\frac x y",
      "\\frac {dx} {dy}",
      "\\frac {{\\partial}x} {{\\partial}y}",
      "\\frac {{\\Delta}x} {{\\Delta}y} "
       ],
       latex= latex.map(function(obj){
           return { item: { val: obj } };
       });
         return [{
            content: latex,
            offset: 0
        }];
});