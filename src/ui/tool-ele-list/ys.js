   /*
* 修改字符时，注意顺序,要和图对应
*/
define(function (require) {
    var latex = 
    ["x={\\frac {-b\\pm\\sqrt {b\\^{2}-4ac}}{2a}}",
            "{\\left(x+a\\right)}^{2}=\\sum^n_{k=0}{\\left(^n_k\\right)x^{k}a^{n-k}}",
            "a^2+b^2=c^2",
            "f(x)=a_0+\\sum^{\\infty}_{n=1}{({a_{n}cos\\frac {{n}\\pi{x}}{L}+b_{n}sin\\frac {{n}\\pi{x}}{L}})}",
            "(1+x)^{n}=1+\\frac{nx}{1!}+\\frac{n(n-1)x^{2}}{2!}+\\cdots",
            "sin\\alpha\\pm{sin\\beta}=2sin\\frac{1}{2}{(}\\alpha\\pm\\beta{)}cos\\frac{1}{2}{(}\\alpha\\mp\\beta{)}",
            "cos\\alpha{+cos\\beta}=2cos\\frac{1}{2}{(}\\alpha{+}\\beta{)}cos\\frac{1}{2}{(}\\alpha{-}\\beta{)}",
            "A=\\pi{r^{2}}"],
         config = [
             {
                 content: [
                            { label: "二次公式" }, { label: "二项式定理" }, { label: "傅立叶级数" },
                            { label: "勾股定理" }, { label: "和的展开式" }, { label: "三角恒等式1" },
                            { label: "三角恒等式2" }, { label: "圆的面积" }
                 ].map(function (obj, index) { obj.item = { val: latex[index] }; return obj; })
             }
         ];
        return config;
});