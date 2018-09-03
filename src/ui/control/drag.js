/*!
 * 拖动控制器 
 */

define( function ( require ) {

   // var _= require("underscore");

    var Utils = require( "base/utils" ),
        kity = require( "kity"),

        DEFAULT_OPTIONS = {
            min: 1,
            max: 2
        },
        DragController = kity.createClass( 'DragController', {

            constructor: function ( parentComponent, kfEditor, target, options ) {

                this.kfEditor = kfEditor;
                this.target = target;

                this.zoom = 1;
                this.step = 0.05;

                this.options = Utils.extend( {}, DEFAULT_OPTIONS, options );
                this.initEvent();

            },

            initEvent: function () {
              var _self= this; 
              var offsetX=0,offsetY=0;
                Utils.JqueryWrap( this.target).on('mousedown',function ( e ) {
                    var LEFTBTN=1;
                    var clientX=e.clientX,clientY=e.clientY;
                    var g= Utils.JqueryWrap(this).find("g:first")[0];
                    var unbindMove= function(){
                            Utils.unbindEvent(this,"mousemove");
                            this.style.cursor="default";
                    }.bind(this);
                    Utils.bindEvent(this, 'mouseup', function (e) {
                        e.preventDefault();
                        return unbindMove();
                    });

                    Utils.bindEvent(this, 'mousemove', function (e) {
                        //仅按下左键移动有效
                        if(e.buttons!==LEFTBTN){
                            return unbindMove();
                        }
                        this.style.cursor="-webkit-grabbing";
                        var width=Utils.JqueryWrap(_self.target).width(),
                        height= Utils.JqueryWrap(_self.target).height(),
                        gWidth= g.getBBox().width,
                        gHeight= g.getBBox().height;

                        var totalX= (gWidth-width)/2,totalY= (gHeight-height)/2;
                         offsetX=(e.clientX-clientX);
                         offsetY= (e.clientY- clientY);

                         offsetX= offsetX<totalX ?totalX :offsetX;
                         offsetY= offsetY<totalY?totalY:offsetY;

                        this.style.cursor="-web-kit-grabbing";

                        console.log("ox:%s ,oy:%s ",offsetX,offsetY);

                        g.setAttribute("transform","translate("+offsetX+" "+offsetY+ ")");

                    });

                    e.preventDefault();
                } );

               

            }

        } );

    return DragController;

} );

