<template>
    <div id="helpMain">
        <el-row :gutter="20">
            <el-col :span="5" class="navWrap">
                <el-menu mode="vertical" default-active="/help" class="el-menu-vertical-demo helpNav" router>
                    <el-menu-item-group title="关于我们">
                        <el-menu-item v-for="(data,index) in my" :index="`/help${data.path}`" :key="index">
                            {{data.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="帮助中心">
                        <el-menu-item v-for="(data,index) in center" :index="`/help${data.path}`" :key="index">
                            {{data.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="声明服务">
                        <el-menu-item v-for="(data,index) in help" :index="`/help${data.path}`" :key="index">
                            {{data.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-col>
            <el-col :span="19">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                my: [
                    {
                        path: '',
                        title: '服务介绍'
                    }, {
                        path: '/contact',
                        title: '联系我们'
                    }
                ],
                center: [
                    {
                        path: '/process',
                        title: '众筹流程'
                    }, {
                        path: '/trade',
                        title: '担保交易'
                    }, {
                        path: '/problem',
                        title: '常见问题'
                    }
                ],
                help: [
                    {
                        path: '/terms',
                        title: '服务条款'
                    }, {
                        path: '/privacy',
                        title: '隐私权政策'
                    }, {
                        path: '/rate',
                        title: '费率标准'
                    }, {
                        path: '/statement',
                        title: '法律声明'
                    }, {
                        path: '/protocol',
                        title: '用户协议'
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style lang="scss">
    @import "./index";
</style>