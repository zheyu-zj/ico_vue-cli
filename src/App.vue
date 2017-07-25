<template>
    <div id="wrap">
        <header>
            <el-row class="header">
                <el-col :span="17">
                    <el-menu class="nav" :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
                        <el-menu-item index="javascript:" class="logoImg">
                            <div class="bg-footer_logo"></div>
                        </el-menu-item>
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/ico">众筹中心</el-menu-item>
                        <el-menu-item index="/trading">担保交易</el-menu-item>
                        <el-menu-item index="/coinLock">币加锁</el-menu-item>
                        <el-menu-item index="/help">帮助</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4">
                    <el-dropdown v-if="login.login">
                        <span class="el-dropdown-link">
                            Hi! {zheyu_ZJ}<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" style="width:500px">
                            <header>
                                PHONE：{{login.phone}}
                                <span>ID：{{login.uid}}</span>
                            </header>
                            <el-table
                                    :data="allAssets"
                                    height="250"
                                    border
                                    style="width: 500px">
                                <el-table-column
                                        prop="name"
                                        label="货币">
                                </el-table-column>
                                <el-table-column
                                        prop="usable" 币加锁简介
                                        label="可用">
                                </el-table-column>
                                <el-table-column
                                        prop="freeze"
                                        label="冻结">
                                </el-table-column>
                            </el-table>
                            <el-dropdown-item>充值</el-dropdown-item>
                            <el-dropdown-item>提现</el-dropdown-item>
                            <el-dropdown-item>充币</el-dropdown-item>
                            <el-dropdown-item>充币</el-dropdown-item>
                            <el-dropdown-item>消息</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-menu v-else mode="horizontal" @select="handleSelect" class="login" router>
                        <el-menu-item index="/login">登录</el-menu-item>
                        <el-menu-item index="javascript:" class="modified">|</el-menu-item>
                        <el-menu-item index="/register">注册</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="3">
                    <el-menu mode="horizontal" @select="handleSelect">
                        <el-menu-item index="/cooperation">
                            <span class="cooperation">申请合作 +</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div class="footer">
                <el-menu class="footerLogo" @select="handleSelect">
                    <el-menu-item index="javascript:" class="logoImg">
                        <div class="bg-footer_logo"></div>
                    </el-menu-item>
                    <el-menu-item index="javascript:">
                        <el-menu class="official" @select="handleSelect" mode="horizontal">
                            <el-menu-item index="/service:">服务介绍</el-menu-item>
                            <el-menu-item index="javascript:" class="modified">|</el-menu-item>
                            <el-menu-item index="/contact">联系我们</el-menu-item>
                        </el-menu>
                    </el-menu-item>
                </el-menu>
                <el-menu mode="horizontal" class="help">
                    <el-menu-item index="javascript:" class="max-modified"></el-menu-item>
                    <el-menu-item-group title="帮助中心">
                        <el-menu-item v-for="data in helps" :index="`/${data.href}`" :key="data.id">{{ data.name }}
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="声明服务">
                        <el-menu-item v-for="data in statements" :index="`/${data.href}`" :key="data.id">{{ data.name
                            }}
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="javascript:" class="max-modified"></el-menu-item>
                </el-menu>
                <ul class="service">
                    <li>
                        <div class="bg-business"></div>
                        <p>
                            商务QQ：<br>
                            <span>3188198558</span>
                        </p>
                    </li>
                    <li>
                        <div class="bg-email"></div>
                        <p>
                            合作邮箱：<br>
                            <a href="mailto:business@lianjinbox.com">business@lianjinbox.com</a>
                        </p>
                    </li>
                </ul>
                <div class="QQgroup">

                    <div class="max-modified"></div>
                    <div class="bg-qq_group"></div>
                    <p>
                        官方Q群：<br>
                        <span>1群：6666666666</span><br>
                        <span>2群：6666666666</span><br>
                        <span>3群：6666666666</span>
                    </p>
                </div>
            </div>
            <p>
                京 ICP 备 16055739 号 - 1 | 京公网安备 11010802022373 号<br>
                <span>风险警告：由于数字货币交易风险较大，易受外界因素影响，价格波动较大，我们强烈建议您在自身能承受的风险范围内参与数字货币交易。</span>
            </p>
        </footer>
    </div>
</template>


<script>
    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                activeIndex: '/',
                helps: [
                    {
                        'href': 'helpTrading',
                        'name': '担保交易'
                    },
                    {
                        'href': 'helpProcess',
                        'name': '众筹流程'
                    },
                    {
                        'href': 'helpAddCoin',
                        'name': '币增宝'
                    },
                    {
                        'href': 'helpIssue',
                        'name': '常见问题'
                    }
                ],
                statements: [
                    {
                        'href': 'statementClause',
                        'name': '服务条款'
                    },
                    {
                        'href': 'statementRate',
                        'name': '费率标准'
                    },
                    {
                        'href': 'statementLaw',
                        'name': '法律声明'
                    }
                ]
            }
        },
        created(){
            this.load();
        },
        watch: {
            '$route': 'load'
        },
        computed: mapState({
            allAssets: state => state.user.allAssets,
            login(state){
                if (state.user.login.login) {
                    this.$store.dispatch('get_allAssets');
                }
                return state.user.login
            },
        }),
        methods: {
            load(){
                this.$store.dispatch('get_login');
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>
<style lang="scss">
    @import "./assets/sass/main";
</style>
