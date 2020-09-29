<template>
    <div class="songlist">
        <van-nav-bar title="歌单" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="tit">
            <div class="l">
                <img src="../../assets/images/sl7.jpg" alt="">
            </div>
            <div class="r">
                <div class="t">
                    <van-icon name="medal-o" />
                    <span>精品歌单</span>
                </div>
                <p class="w">夏日情歌集，~夏日漫</p>
                <p>烂漫夏日，我可以请你跳支舞？</p>
            </div>
        </div>

        <div class="con">
            <ul>
                <li>
                    <div class="img-wrap">
                        <img src="../../assets/images/sl2.jpg" alt="">
                        
                    </div>
                    <p>我想抱着你，伸手在夏天的风</p>
                </li>
                <li>
                    <div class="img-wrap">
                        <img src="../../assets/images/sl3.jpg" alt="">
                        
                    </div>
                    <p>我想抱着你，伸手在夏天的风</p>
                </li>
                <li>
                    <div class="img-wrap">
                        <img src="../../assets/images/sl4.jpg" alt="">
                        
                    </div>
                    <p>我想抱着你，伸手在夏天的风</p>
                </li>
                <li>
                    <div class="img-wrap">
                        <img src="../../assets/images/sl8.jpg" alt="">
                        
                    </div>
                    <p>我想抱着你，伸手在夏天的风</p>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onClickLeft() {
                this.$router.push({
                    path: "/find"
                })
            }
        },
    };
</script>

<style scoped lang="scss">
    .van-nav-bar {
        background-color: rgb(241, 129, 129);
    }

    .tit {
        width: 100%;
        height: 130px;
        background-color: rgb(13, 6, 53);

        .l {
            float: left;

            img {
                width: 100px;
                height: 100px;
                margin-top: 15px;
                border-radius: 10px;
                margin-left: 15px;
            }
        }

        .r {
            float: left;
            margin-left: 30px;

            .t {
                margin-top: 20px;
                position: relative;

                i {
                    color: #cecece;
                    font-size: 30px;
                }

                span {
                    color: #fff;
                    position: absolute;
                    top: 9px;
                    left: 40px;
                }
            }

            p {
                color: rgb(160, 158, 158);
                font-size: 15px;
                margin-top: 10px;
            }

            .w {
                color: #fff;
                ;
            }
        }
    }

    .con {
        ul {
            li {
                width: 160px;
                height: 200px;
                margin-top: 10px;
                margin-bottom: 10px;
                margin-left: 20px;
                float: left;

                .img-wrap {
                    width: 160px;
                    height: 160px;
                    border-radius: 10px;
                    overflow: hidden;

                    img {
                        width: 160px;
                        height: 160px;

                    }
                }

                p{
                    margin-top: 5px;
                    font-size: 14px;
                    line-height: 1.3;
                }


            }
        }
    }
</style>