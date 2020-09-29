<template>
    <div class="music">

        <p class="p">
            <i class="el-icon-arrow-left i1" @click="back"></i>
            {{ title }}
            <i class="el-icon-s-operation i2" @click="toPlay"></i>
        </p>
        <van-card class="goods-card" title="我喜欢的音乐"
            thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1045767903,2826787841&fm=26&gp=0.jpg" />
        <div class="icon">
            <ul>
                <li>
                    <i class="el-icon-chat-dot-square a"></i>
                    <span>10万</span>
                </li>
                <li>
                    <i class="el-icon-share a"></i>
                    <span>3015</span>
                </li>
                <li>
                    <i class="el-icon-download a"></i>
                    <span>下载</span>
                </li>
                <li>
                    <i class="el-icon-finished a"></i>
                    <span>多选</span>
                </li>
            </ul>
        </div>
        <div class="play">
            <van-cell-group>
                <van-cell title="播放全部(共五首)" icon="play-circle-o" />
            </van-cell-group>
            <div class="list" v-for="(item,index) in list" :key="item._id">
                <div class="left">{{index+1}}</div>
                <div class="center">
                    <p>{{item.song}}</p>
                    <p>
                        <van-icon name="hot" color="#f3b372" />
                        <span>{{item.singer}}</span>-<i>{{item.song}}</i>
                    </p>
                </div>
                <div class="right">
                    <van-icon name="video-o" size="30" color="#bbbbbb" />
                    <van-icon name="weapp-nav" size="30" color="#bbbbbb" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    export default {

        components: {},
        data() {
            return {
                list: [{
                    song: '情人',
                    singer: '刀郎'
                }]
            };
        },
        props: {
            title: {
                type: String,
                default: "歌单",
            },
        },
        methods: {
            toPlay() {
                this.$router.push({
                    path: '/play'
                })
            },
            back() {
                history.go(-1);
            },
            getmusic() {
                // axios.get('/api/music').then(res => {

                //     this.list = res.data.list
                //     console.log(this.list)
                // })
            }
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},


        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
            this.getmusic()
        }
    }
</script>
<style lang="scss" scoped>
    .music {
        background: #2E3432;
        overflow: hidden;

        .p {
            overflow: hidden;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            background: #2E3432;
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-weight: 600;
            color: white;
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: none;

            .i1 {
                margin-left: 20px;
            }

            .i2 {
                margin-right: 20px;
            }
        }

        .goods-card {
            margin-top: 45px;
            background-color: #2E3432;
            color: #FFFFFF;
        }

        .icon {
            background: #2E3432;
            overflow: hidden;
            margin-top: 22px;
            margin-bottom: 10px;
            color: #ffffff;

            ul {
                display: flex;

                li {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;

                    .a {
                        font-size: 22px;
                    }

                    span {
                        margin-top: 5px;
                    }
                }
            }
        }

        .play {
            background: #ffffff !important;
            color: #000;

            .list {
                height: 40px;
                display: flex;
                // padding-left: 16px;
                padding: 6px 0 6px 16px;
                border-bottom: 1px solid #ebedf0;

                .left {
                    flex: 1;
                    text-align: left;
                    line-height: 40px;
                }

                .center {
                    flex: 6.8;

                    p {
                        &:nth-child(1) {
                            font-size: 16px;
                            color: #101010;
                        }

                        &:nth-child(2) {
                            font-size: 14px;
                            color: #646567;
                        }
                    }
                }

                .right {
                    flex: 2.13333;
                }
            }
        }


    }
</style>