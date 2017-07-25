<template>
    <div id="main">
        <el-carousel indicator-position="outside" height="450px">
            <el-carousel-item v-for="item in 4" :key="item.id">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <el-menu class="newAnnouncement" router>
            <el-menu-item index="/">公告：<span>暂无公告</span></el-menu-item>
        </el-menu>
        <div class="indexWrap">
            <h2>最热项目</h2>
            <hotProject :hotProject="hotProject"></hotProject>
            <h2>最新项目</h2>
            <newProject :project="newProject"></newProject>
            <h2 class="transactionTitle">担保交易</h2>
            <div class="bg-transaction">
                <p class="transactionFrequency">我们已为 <span>23</span> 次交易进行安全担保</p>
                <p class="transactionTotal">累计交易额 <span>50.392</span> 元</p>
                <router-link class="transaction" to="/trading">立即交易</router-link>
            </div>
            <div class="newsWrap">
                <div>
                    <h2>官方公告</h2>
                    <el-menu router>
                        <el-menu-item index="/" v-for="news in 7" :key="news.id"><p>'{{ news.title
                            }}'dsadasdasdasdasd按时打算大安师大as大啊但是打算ADAD asdasd按时打算大安师大as大啊但是打算ADAD asdasd按时打算大安师大as大啊但是打算ADAD asdasd按时打算大安师大as大啊但是打算ADAD 是</p>
                            <span>2017.07.04'{{ news.time }}'</span></el-menu-item>
                    </el-menu>
                </div>
                <div>
                    <h2>新闻消息</h2>
                    <el-menu router>
                        <el-menu-item index="/news" v-for="news in 2" :key="news.id">
                            <img src="">
                            <div>
                                <h5>股权众筹的美国经验与本土之路 <br><span>2017-12-12</span></h5>
                                <p>2015 年10 月，在美国股权众筹取得历史性进展之时，中国市场也翘首企盼、静待破局。 2015年10月，美国证券交易委员会…</p>
                                <span>查看全文</span>
                            </div>
                        </el-menu-item>
                    </el-menu>
                </div>
            </div>
            <h2>合作伙伴</h2>
            <div class="Cooperation">
                <img v-for="src in 4" :src="src">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data(){
            return {}
        },
        components: {
            hotProject: function (resolve) {
                //异步组件写法
                require(['@/components/hotProject.vue'], resolve)
            },
            newProject: function (resolve) {
                //异步组件写法
                require(['@/components/project.vue'], resolve)
            }
        },
        created(){
            this.load();
        },
        watch: {
            '$route': 'load'
        },
        computed: mapState({
            hotProject: state => state.indexProject.hot,
            newProject: state => state.indexProject.new
        }),
        methods: {
            load(){
                this.$store.dispatch('get_indexProject');
            },
            handleSelect(key, keyPath) {
//                console.log(key, keyPath);
                console.log(this.$store.state)
            }
        },
    }
</script>

<style lang="scss">
    @import './index';
</style>