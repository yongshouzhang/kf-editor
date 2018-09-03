define(function(require){

    var UI_ELE_TYPE = require( "ui/ui-impl/def/ele-type" );
    /*
        BOX_TYPE = require( "ui/ui-impl/def/box-type" ),
        CHAR_POSITION = require( "ui/char-position.data" ),
        OTHER_POSITION = require( "ui/other-position.data" );
    */

     var processImage = function (obj) {
        
        var getIcon = function (x, y) {
            return ';background:url("' + obj.url + '") ' + "-"+(x * obj.width) + 'px ' +"-"+ (y *obj.height) + 'px;width:' + obj.width + 'px;height:' + obj.height + 'px; ';
        };
        //二维数组
        var result = [];
        for (var row = 0 ; row < obj.row; row++) {
            result.push([]);
            for (var col = 0; col < obj.column; col++) {
                result[result.length - 1].push(getIcon(col, row));
            }
        }
        return { column: obj.column, row: obj.row, list: result };
    };

    var char = {
        url: "assets/images/toolbar/char/icon.jpg",
        width: 32,
        height: 32,
        row: 23,
        column: 14,
        latex:require("ui/toolbar-ele-list/char")
    }, ys = {
        url: "assets/images/toolbar/ys/icon.jpg",
        width: 310,
        height: 72,
        row: 8,
        column: 1,
        latex:require("ui/toolbar-ele-list/ys")
    };

    var ysConfig = processImage(ys);
    var ysChild = require("ui/toolbar-ele-list/ys");

    var charConfig = processImage(char);
    var charChild = require("ui/toolbar-ele-list/char");

    var getChildern = function (config, children) {
            var latexList = children.latex,
                rowCount = config.row,
                columnCount = config.column,
                iconList = config.list;
            for (var k = 0 ; k < children.length; k++) {
                var offset = children[k].offset || 0;
                for (var i = offset; i < iconList.length; i++) {
                    var tmpIcon = iconList[i];
                    for (var j = 0; j < iconList[i].length; j++) {
                        var item = children[k].content[i * columnCount + j];
                        try {
                            if (item && item.item) {
                                children[k].content[i * columnCount + j].item.style = iconList[i][j];
                            }
                        }
                        catch(e){
                            console.error(e);
                            debugger
                        }
                    }
                }
            }
      
        return children;
    };


    var url = 'assets/images/toolbar/menu.png';
    var positionList = ["-240px 0px","-24px -40px","-53px 0px"," -280px 0px",
        " -358px 0px ","0px 0px","-91px 0px  ","7px  -43px","-126px 0px ",
        "-317px 0px", "-163px 0px","-30px 0px","-180px -40px", "-50px -40px","-133px -40px"
    ],
    title="预设公式,符号,分式,幂数,根式,括号,积分,大型运算,极限,三角函数,矩阵,导数,箭头,希腊,字母".split(",");
   var config=[];
    positionList.forEach(function(obj,index){
        if (index > 0) {
            config .push({type: UI_ELE_TYPE.DELIMITER });
        }
        config.push({
            type:UI_ELE_TYPE.DRAPDOWN_BOX,
            options:{
                button:{
                    label:title.shift(),
                    icon:url,
                    position:obj
                },
                box:{
                    width:400,
                    group: [
                        {
                            items: []
                        }]
                }
            }
        });
       
    });
    return config;
});