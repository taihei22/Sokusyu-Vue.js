var app = new Vue({
    el: '#app',
    data: {
        name: "ゲスト"
    },
    methods: {
        onclick: function(e){
           console.log(
               "座標：" + e.clientX + "," + e.clientY
           );
        },
        clear: function(){
            this.name = "";
        }
    }
});