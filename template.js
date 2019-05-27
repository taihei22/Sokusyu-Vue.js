var app = new Vue({
    el: '#app',
    data: {
        message: 'こんにちは！！'
    },
    // 算出プロパティ this部分の値が変わった際に評価される
    // computed: {
    //     localEmail: function(){
    //         return this.email.split('@')[0].toUpperCase();
    //     }
    // },
    // メソッド 再描画の際に常に評価される
    // methods: {
    //     localEmail: function(){
    //         return this.email.split('@')[0].toUpperCase();
    //     }
    // }
});