new Vue({
    el: '#app',
    data:{
        current: new Date().toLocaleString()
    },
    computed: {
        // 初回に呼び出されたら、そのあとは変化しない
        randomc: function(){
            return Math.random();
        }
    },
    methods: {
        onclick: function(){
            this.current = new Date().toLocaleString();
        },
        randomm: function(){
            return Math.random();
        }
    }
})