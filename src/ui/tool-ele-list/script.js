define(function(){
    var latex= ["\\frac \\placeholder\\placeholder", " {\\placeholder / \\placeholder}", "\\frac {\\pi} 2 ", 
    "\\frac x y", "\\frac {dx} {dy}", "\\frac {{\\partial}x} {{\\partial}y} ", "\\frac {{\\Delta}x} {{\\Delta}y} ", 
    "\\placeholder^\\placeholder", "\\placeholder_\\placeholder", "\\placeholder_\\placeholder^\\placeholder", 
    "{ ^\\placeholder_\\placeholder \\placeholder}", "{X_{y^2}}", "{e^{-iwt}}", "{x^2}", "{e^x}", 
    "{A^n_m}", "{C^n_m}", "{^n_1 Y}", "V=a^3", "V={\\frac 4 3}{\\pi}r^3", "(a{\\pm}b)=a^2{\\pm}2ab{\\pm}b^2"],
     latex= latex.map(function(obj){
        return { item: { val: obj } };
    });
      return [{
         content: latex,
         offset: 0
     }];
});