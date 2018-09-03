define(function(){

    var first=["\\sin{\\placeholderx}", "\\cos{\\placeholderx}", "\\tan{\\placeholderx}", 
    "\\cot{\\placeholderx}", "\\sec{\\placeholderx}", "\\csc{\\placeholderx}", 
    "\\sin \\theta", " \\sin \\theta= \\frac {2 \\tan  {\\frac \\theta  2} } { 1 + {\\tan}^2 \\frac \\theta 2} ",
     "\\cos \\theta = \\frac {  1 - {\\tan}^2 \\frac \\theta 2} { 1 + {\\tan}^2 \\frac \\theta 2} ",
      "\\cos \\theta = \\frac { {\\tan {\\frac \\theta 2}} } { 1 + {\\tan}^2 \\frac \\theta 2} "],
        second=["\\arcsin", "\\arccos", "\\arctan", "\\arcsin(-x)  =  -  \\arcsin(x)", 
        "\\arccos(-x)  = \\pi  -  \\arccos(x)", 
        "\\arctan(-x)  =  -  \\arctan(x)", "a=\\arccos \\frac { b^2+c^2 -a^2 } {2bc} "],
        third=["{{\\sin}^{-1}\\placeholder}", "{{\\cos}^{-1}\\placeholder}", "{{\\tan}^{-1}\\placeholder}", 
        "{{\\csc}^{-1}\\placeholder}", "{{\\sec}^{-1}\\placeholder}", "{{\\cot}^{-1}\\placeholder}", 
        "{\\sinh\\placeholder}", "{\\cosh\\placeholder}", "{\\tanh\\placeholder}", "{\\coth\\placeholder}", 
        "{{\\sinh}^{-1}\\placeholder}", "{{\\cosh}^{-1}\\placeholder}", "{{\\tanh}^{-1}\\placeholder}", 
        "{{\\coth}^{-1}\\placeholder}",  "\\sinh(x) = \\frac { \\lbrackets e^x - {{e}^{(-x)}} \\rbrackets} 2", 
        "\\cosh(x) = \\frac { \\lbrackets e^x + {{e}^{(-x)}} \\rbrackets} 2"];

    var list = [first, second, third].map(function (tmp) {
        return tmp.map(function (obj) {
            return { item: { val: obj } };
        });
    });
       return [
        {
            title: "三角函数一",
            content: list[0],
            offset: 0
        },
        {
            title: "三角函数二",
            content: list[1],
            offset: 8
        },
        {
            title: "三角函数二",
            content: list[2],
            offset: 8
        }
    ];

});