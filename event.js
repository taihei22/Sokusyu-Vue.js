var app = new Vue({
    el: '#app',
    data: {
        message: ""
    },
    methods: {
        onclick: function(message, e){
            this.message = new Date().toLocaleString();
            console.log(message);
            console.log(e);
        }
    }
});