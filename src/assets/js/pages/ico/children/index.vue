<template>
    <div id="icoChildrenMain">
        <div class="icoDetails">
            <p>
                <router-link to="/ico">众筹中心</router-link>
                > {{project.title}}
            </p>
            <h2>{{project.title}}</h2>
            <span>{{project.type}}</span>
            <table v-if="project.commit">
                <thead>
                <tr>
                    <th colspan="3">技术参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>中文名 <span>{{project.name}}</span></td>
                    <td>英文名 <span>{{project.EsName}}</span></td>
                    <td>缩写代码 <span>{{project.EsAbbreviation}}</span></td>
                </tr>
                <tr>
                    <td>研发者 <span>{{project.Developers}}</span></td>
                    <td>核心算法 <span>{{project.CoreAlgorithm}}</span></td>
                    <td>证明方式 <span>{{project.ProofWay}}</span></td>
                </tr>
                <tr>
                    <td>区块时间 <span>{{project.BlockTime}}</span></td>
                    <td>货币总量 <span>{{project.coinsTotal}}</span></td>
                    <td>发比日期 <span>{{project.time}}</span></td>
                </tr>
                <tr>
                    <td colspan="3">币加锁 <span>{{project.CoinLock}}</span></td>
                </tr>
                </tbody>
            </table>
            <h3>项目简介</h3>
            <div></div>
        </div>
        <div class="icoUser">
            <div class="coin">
                <div class="coinIntroduction">
                    <img src="" alt="">
                    <p class="coinName">{{project.name}} <span>{{project.EsAbbreviation}}</span></p>
                    <i v-if="project.status == 0" class="finish">展示中</i>
                    <i v-if="project.status == 1" class="finish">预热中</i>
                    <i v-if="project.status == 2" class="finish">进行中</i>
                    <i v-if="project.status == 3" class="finish">处理中</i>
                    <i v-if="project.status == 4" class="finish">已结束</i>
                </div>
                <h6>众筹进度：<span>{{project.schedule}}%</span></h6>
                <el-progress :percentage="project.schedule" :show-text="false"></el-progress>
                <div class="aims">
                    <p><span>{{project.aims}}</span><i>份</i><br>ICO目标</p>
                    <p><span>{{project.complete}}</span><i>份</i><br>已支持份数</p>
                </div>
            </div>
            <div class="trad" v-if="login">
                <p>每份单价：<i> {{project.price}} </i><span>{{project.EsAbbreviation}}</span></p>
                <p>可用余额：<b> {{rmb.usable}} </b><span>{{rmb.EsAbbreviation}}</span></p>
                <label>
                    <span>申购份数：</span>
                    <input type="number">
                </label>
                <label>
                    <span>申购金额：</span>
                    <input type="text" disabled placeholder="0">
                    <i></i>
                </label>
                <label>
                    <span>交易密码：</span>
                    <input type="password">
                </label>
                <button>立即申购</button>
                <router-link to="/">余额不够？去充值</router-link>
            </div>
            <div v-else class="login">
                <div>
                    <div class="no-login"></div>
                    <p>您尚未登录</p>
                </div>
                <router-link to="/login" class="loginUp">立即登录</router-link>
                <router-link to="/register" class="registered">注册</router-link>
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
        created(){
            this.load();
        },
        watch: {
            '$route': 'load'
        },
        computed: mapState({
            project: function (state) {
                let project = {};
                let allProject = state.ico.allProject;
                let path = this.$route.params.id;
                allProject.forEach(function (vals) {
                    for (let val in vals) {
                        if (val == 'id' && vals[val] == path) {
                            project = vals;
                        }
                    }
                });
                return project;
            },
            login: state => state.user.login.login,
            rmb: function (state) {
                let rmb = {};
                state.user.allAssets.forEach(function (vals) {
                    for (let val in vals) {
                        if (val === 'id' && vals[val] === 0) {
                            for (let index in vals) {
                                if (index === 'usable') {
                                    rmb[index] = vals[index];
                                }
                                if (index === 'EsAbbreviation') {
                                    rmb[index] = vals[index];
                                }
                            }
                        }
                    }
                });
                return rmb
            }
        }),
        methods: {
            load(){
                this.$store.dispatch('get_allProject');
                this.$store.dispatch('get_login');
            },
            handleSelect(key, keyPath) {
//                console.log(this.$store.state)
            },
            handleSizeChange(val) {
//                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
//                console.log(`当前页: ${val}`);
            }
        },
    }
</script>
<style lang="scss">
    @import "index";
</style>
