<template>
    <div class="test-city">
        <input placeholder="请选择城市" @focus="syncCityBox" @focusout="syncCityBox">
        <div v-if="showCityBox" class="city-box">fsdfs</div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                showCityBox:false
            }
        },
        methods:{
            syncCityBox(){
                this.showCityBox = !this.showCityBox;
            }
        }
    }
</script>


<style>

</style>