<template>
    <div class="diantaifenlei">
        <van-nav-bar title="电台分类" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="type">
            <div class="tit">热门分类</div>
            <ul>
                <li>
                    <van-icon name="orders-o" />
                    <span>有声书</span>
                </li>
                <li>
                    <van-icon name="gift-card-o" />
                    <span>知识技能</span>
                </li>
                <li>
                    <van-icon name="chart-trending-o" />
                    <span>商业财经</span>
                </li>
                <li>
                    <van-icon name="eye-o" />
                    <span>人文历史</span>
                </li>
                <li>
                    <van-icon name="comment-circle-o" />
                    <span>外语世界</span>
                </li>
                <li>
                    <van-icon name="goods-collect-o" />
                    <span>亲子宝贝</span>
                </li>
            </ul>
        </div>

        <div class="type two">
            <div class="tit">更多分类</div>
            <ul>
                <li>
                    <van-icon name="orders-o" />
                    <span>音乐故事</span>
                </li>
                <li>
                    <van-icon name="gift-card-o" />
                    <span>相声曲艺</span>
                </li>
                <li>
                    <van-icon name="chart-trending-o" />
                    <span>外语世界</span>
                </li>
                <li>
                    <van-icon name="eye-o" />
                    <span>美文读物</span>
                </li>
                <li>
                    <van-icon name="comment-circle-o" />
                    <span>脱口秀</span>
                </li>
                <li>
                    <van-icon name="goods-collect-o" />
                    <span>广播团</span>
                </li>
                <li>
                    <van-icon name="orders-o" />
                    <span>二次元</span>
                </li>
                <li>
                    <van-icon name="gift-card-o" />
                    <span>明星做主播</span>
                </li>
                <li>
                    <van-icon name="chart-trending-o" />
                    <span>科技科学</span>
                </li>
                <li>
                    <van-icon name="eye-o" />
                    <span>创作翻唱</span>
                </li>
                <li>
                    <van-icon name="comment-circle-o" />
                    <span>3D电子</span>
                </li>
                <li>
                    <van-icon name="goods-collect-o" />
                    <span>娱乐影视</span>
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
                    path: "/find/zhubo"
                })
            }
        },
    };
</script>

<style scoped lang="scss">
    .van-nav-bar {
        background-color: rgb(241, 129, 129);
    }

    .type{
        width: 100%;
        
        .tit{
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-bottom: 1px solid #f4f4f4;
        }

        ul{
            li{
                width: 49.5%;
                height: 40px;
                float: left;
                text-align: center;
                line-height: 50px;
                border-bottom: 1px solid #f4f4f4;
                border-left: 1px solid #f4f4f4;

                i{
                    color:red;
                    font-weight: bold;
                    margin-right: 10px;
                }
            }
        }
    }

    .two{
        position: absolute;
        top: 240px;
    }
</style>