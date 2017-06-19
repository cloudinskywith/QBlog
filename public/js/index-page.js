'use strict';

var vm = new Vue({
    el: '.q-blog',
    data: function data() {
        return {};
    },


    methods: {
        goToLogin: function goToLogin() {
            window.location.href = '/login';
        },
        goToSignup: function goToSignup() {
            window.location.href = '/signup';
        }
    },
    mounted: function mounted() {}
});