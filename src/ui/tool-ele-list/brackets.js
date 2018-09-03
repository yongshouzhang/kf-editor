define(function(){
    var latex= ["\\left(\\placeholder\\right)",
     "\\left[\\placeholder\\right]", "\\left\\{\\placeholder\\right\\}", 
     "\\left|\\placeholder\\right|"],
     latex= latex.map(function(obj){
        return { item: { val: obj } };
    });
      return [{
         content: latex,
         offset: 0
     }];
});