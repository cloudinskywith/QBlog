'use strict';

var vm = new Vue({
    el: '.q-blog',
    data: function data() {
        return {};
    },


    methods: {
        goToLogin: function goToLogin() {
            window.location.href = '/users/login';
        },
        goToSignup: function goToSignup() {
            window.location.href = '/users/signup';
        }
    },
    mounted: function mounted() {}
});