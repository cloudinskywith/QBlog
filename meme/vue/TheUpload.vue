<template>
    <div>
        <div class="upload">
            <img :src="filesrc" v-if="filesrc">
            <div class="list-cover" v-if="filesrc">
                <i class="ivu-icon ivu-icon-ios-eye-outline" @click="modalimg = true"></i>
                <i class="ivu-icon ivu-icon-ios-trash-outline" @click="delImage"></i>
            </div>
            <div class="upload-input" v-else @click="focus">
                <input ref="file" type="file" multiple="multiple" @change="fileChange">
                <i class="ivu-icon ivu-icon-ios-plus-outline"></i>
                <span>{{desc}}</span>
            </div>
        </div>

        <Modal class="modall"
               v-model="modalimg"
               title="查看图片">
            <img :src="filesrc">
        </Modal>
    </div>

</template>
<script>
    export default {
        name: 'the-upload',
        data(){
            return {
                filesrc: null,
                modalimg: false,
            }
        },
        props: {
            image: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            desc: {
                type: String,
                default: '上传图片'
            }
        },
        watch: {
            image(v){
                this.filesrc = v;
            }
        },
        methods: {
            focus(){
                this.$refs.file.click();
            },
            fileChange(e){
                const files = e.target.files;
                if (!files) {
                    return;
                }
                var self = this;
                if(/image\/\w+/.test(files[0].type)){
                    var reader = new FileReader();
                    reader.readAsDataURL(files[0]);
                    reader.onload = function (e) {
                        self.uploadImg(files[0], self.name, function (res) {
                            self.filesrc = e.target.result;
                            self.$emit('uploadsuccess', res.path);
                        });
                        self.$refs.file.value = null;
                    }
                }else{
                    this.$Message.error('文件格式不正确');
                }

            },
            delImage(){
                var self = this;
                setTimeout(function () {
                    self.filesrc = '';
                    self.$emit('deleteimg');
                },10);
            },
            uploadImg(file, name, callback){
                var data = new FormData(),
                    self = this;
                data.append(name, file);
                $.ajax({
                    url: '/upload',
                    type: 'post',
                    data: data,
                    cache : false,
                    contentType : false,
                    processData : false,
                    dataType : "json",
                    success: function (res) {
                        callback(res);
                    },
                    error: function (err) {
                        console.log(err);
                        self.$Message.error('上传失败')
                    }
                });
            },
            /*ok () {
             //				this.$Message.info('点击了确定');
             },
             cancel () {
             //				this.$Message.info('点击了取消');
             }*/
        },
        mounted(){
            this.filesrc = this.image;
        }
    }
</script>
<style scoped>
    .upload {
        width: 78px;
        height: 78px;
        line-height: 78px;
        text-align: center;
        overflow: hidden;
        background: #fff;
        position: relative;
        margin-right: 8px;
        transition: border-color .2s ease;
        border-radius: 3px;
    }

    .upload:hover .list-cover {
        display: block;
    }

    .upload:hover .upload-input {
        border-color: #00C8AF;
        color: #00C8AF;
    }

    .list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

    input[type='file'] {
        width: 0;
        height: 0;
        opacity: 0;
        z-index: -1;
        position: absolute;
    }

    .upload-input {
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid #dddddd;
        border-radius: 3px;
        line-height: normal;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        color: #C8C8C8;
    }

    .upload-input i {
        font-size: 20px;
        margin-bottom: 5px;
        width: 100%;
    }

    .upload-input span {
        display: block;
        font-size: 13px;
        /*white-space: nowrap;*/
    }

    .upload img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .modall img{
        max-width: 100%;
        display: block;
        margin: 0 auto;
    }
</style>
