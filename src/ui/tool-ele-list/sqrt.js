define(function(){

    var latex = [ "\\frac \\placeholder\\placeholder", " {\\placeholder / \\placeholder}", 
    "\\frac {\\pi} 2 ", "\\frac x y", "\\frac {dx} {dy}", "\\frac {{\\partial}x} {{\\partial}y} ",
     "\\frac {{\\Delta}x} {{\\Delta}y} ", "\\sqrt\\placeholder", 
    "\\sqrt [\\placeholder] \\placeholder", "\\sqrt [3] \\placeholder", "\\sqrt [5] \\placeholder",
     "\\frac {-b{\\pm}\\sqrt {b^2-4ac}} {2ac}", "\\sqrt [n] {x}", "\\sqrt {a^2+b^2}" ],
     latex = latex.map(function(obj){
        return { item: { val: obj } };
    });
      return [{
         content: latex,
         offset: 0
     }];
});