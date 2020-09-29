<!-- 组件说明 -->
<template>
    <div class='showtime'>
        <div class="showCon">
            <div class="showTitle">
                <h3>9月榜单</h3>
            </div>
            <div class="showList">
                <img src="../../../assets/images/show1.png" >
                <p>9月社区达人榜单火热来袭</p>
            </div>
        </div>
        <div class="showCon">
            <div class="showTitle">
                <h3>超燃计划3.0</h3>
            </div>
            <div class="showList">
                <img src="../../../assets/images/show2.png" >
                <p>超燃计划3.0-视频剪辑大赛火热来袭</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        watch: {

        },
        methods: {

        },
        created() {

},
        mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style lang='scss' scoped>
.showtime{
    margin-top:80px;
}
.showCon{
    padding:10px;
    background: #fff;
    border-bottom: 1px solid #efefef;
}
.showTitle{
    margin-top: 20px;
    h3{
        font-size: 20px;
        font-weight: 600;
    }
}
.showList{
    margin-top:10px;
    img{
        width: 100%;
    }
    p{
        color: #666;
        margin-top:10px
    }
}
</style>