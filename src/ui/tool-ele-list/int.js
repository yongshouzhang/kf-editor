define(function(require){
    var latex = 
    ["{\\intt^\\placeholder_\\placeholder\\placeholder}", "\\iintt^\\placeholder_\\placeholder\\placeholder", 
    "\\iiintt^\\placeholder_\\placeholder\\placeholder", "\\cint\\placeholder", "\\cint^\\placeholder_\\placeholder\\placeholder", 
    "\\cintt^\\placeholder_\\placeholder\\placeholder", "\\ciint \\placeholder", "\\ciint^\\placeholder_\\placeholder\\placeholder", 
    "\\ciintt^\\placeholder_\\placeholder\\placeholder", "\\ciiint \\placeholder", "\\ciiint^\\placeholder_\\placeholder\\placeholder", 
    "\\ciiintt^\\placeholder_\\placeholder\\placeholder", "{\\vertical {\\placeholder1}{\\placeholder2}}", "{\\vertical {\\placeholder2}{\\placeholder1}}", 
    "\\int kdx =kx+c ", "\\int \\frac {dx} x = ln\\left | x\\right | +C ", "\\int x^{\\mu} dx= \\frac{ x^{\\mu+1}} {\\mu+1} +c",
     "\\int^b_a{f\\left(x\\right)}= F\\left (b\\right) - F\\left (a\\right) "];   
       latex= latex.map(function(obj){
           return { item: { val: obj } };
       });
         return [{
            content: latex,
            offset: 0
        }];
});