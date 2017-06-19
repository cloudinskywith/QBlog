var vm = new Vue({
    el: '.q-blog',
    data(){
        return {}
    },

    methods: {
        goToLogin(){
            window.location.href = '/users/login';
        },
        goToSignup(){
            window.location.href = '/users/signup';
        }
    },
    mounted(){}
})