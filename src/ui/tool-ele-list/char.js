define(function (require) {
    var childFst = ["\\subsetneq ", " \\plus ", " \\minus ", " \\times ", 
    " \\cdot ", " \\div ", " = ", " \\approx ", " \\neq ", " \\pm ", 
    " \\lt ", " \\gt ", " \\leq ", " \\geq ", " \\absolutex ", " \\surd ", 
    " \\upbracket ", " \\trianglesymbol ", " \\verticalsym ", " \\parallel ", 
    " \\horn ", " \\circ ", " \\upcircle ", " \\bigodot ", " \\equiv ", " \\cong ", 
    " \\sim ", " \\cup ", " \\cap ", " \\included ", " \\rightcontain ", " \\contain ", 
    " \\leftcontain ", " \\in ", " \\notcontain ", " \\phi ", " \\infty ", " \\propto ",
     " \\calculous ", " \\partial ", " \\therefore ", " \\because ", " \\twopoints ", " \\fourpoints ", 
     " \\gets ", " \\to ", " \\uparrow ", " \\downarrow ", " ! ", " \\ll ", " \\gg ", " \\mp ", 
     " \\simeq ", " \\forall ", " \\varnothing ", " \\per ", " \\permil ", " \\exists ", " \\nexists ", 
     " \\ni ", " \\leftrightarrow ", " \\neg ", " \\ast ", " \\vdots ", " \\cdots ", " \\rddots ", 
     " \\ddots ", " \\aleph ", " \\beth ", " \\blacksquare ", " \\degf ", " \\degc ", " \\bigotimes ", 
     " \\slash ", " \\backslash ", " ' ", " \" ", " \\andsym ", " ? ", " # ", " \\span ", 
     " \\lpr ", " \\rpr ", " \\lbr ", " \\rbr ", " \\nlbraces ", " \\nrbraces ", " ~ ", " \\point ", 
     " \\comma ", " \\circledast ", " \\circleddash ", " \\circledplus ", " \\circledtime ", 
     " \\circledminus ", " \\circleddiv ", " \\mapsto ", " \\lnine ", " \\varkappa ", " \\oplus ", 
     " \\solid ", " \\solidc ", " \\boxplus ", " \\boxdot ", " \\boxminus ", " \\boxtime"],
    childSnd = ["\\neq ", " \\ncong ", " \\nequiv ", " \\nge ", " \\ngt ", " \\nin ", " \\nle ", 
    " \\nlt ", " \\nsim ", " \\nsubseteq ", " \\nsupseteq ", " \\lneqq ", " \\gneqq ", " \\nprec ",
     " \\nsucc ", " \\subsetneq ", " \\supsetneq ", " \\lnsim ", " \\gnsim ", " \\precnsim ", " \\succnsim ", 
     " \\ntriangleleft ", " \\ntriangleright ", " \\ntrianglelefteq ", " \\ntrianglerighteq ", " \\nmid ", 
     " \\nparallel ", " \\nvdash ", " \\nvdashx ", " \\nvdashy ", " \\nvdashz ", " \\nexists"
    ];

    childFst = childFst.map(function (obj) {
        return { item: { val: obj } };
    });
    childSnd = childSnd.map(function (obj) {
        return { item:{val: obj }};
    });
    return [
        {
            title: "常用符号",
            content: childFst,
            offset: 0
        },
        {
            title: "求反符号",
            content: childSnd,
            offset: 8
        }];
});
