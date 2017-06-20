var vm = new Vue({
    el: '.q-blog',
    data(){
        return {}
    },

    methods: {
        goToLogin(){
            window.location.href = '/login';
        },
        goToSignup(){
            window.location.href = '/signup';
        }
    },
    mounted(){}
})