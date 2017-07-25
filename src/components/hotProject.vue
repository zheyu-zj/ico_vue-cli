<template>
    <el-menu class="hotProject" router>
        <el-menu-item :index="`/ico/${hotProject.id}`">
            <el-row>
                <el-col class="figure" :span="12">
                    <p v-if="hotProject.status === '0'" class="finish">展示中</p>
                    <p v-if="hotProject.status === '1'" class="finish">预热中</p>
                    <p v-if="hotProject.status === '2'" class="finish">进行中</p>
                    <p v-if="hotProject.status === '3'" class="finish">处理中</p>
                    <p v-if="hotProject.status === '4'" class="finish">已结束</p>
                    <img :src="hotProject.img">
                    <span>{{hotProject.type}}</span>
                </el-col>
                <el-col class="introduce" :span="12">
                    <h3>{{hotProject.title}}</h3>
                    <p class="introduceCon" ref="introduceCon">
                        {{hotProject.Introduction}}
                    </p>
                    <h6>众筹进度：<span>{{hotProject.schedule}}%</span></h6>
                    <el-progress :percentage="hotProject.schedule" :show-text="false"></el-progress>
                    <div class="p_warp">
                        <p>{{hotProject.aims}}份<br>
                            <span>ico目标</span>
                        </p>
                        <span></span>
                        <p>{{hotProject.complete}}份<br>
                            <span>已募集</span>
                        </p>
                        <p>
                            <router-link class="seeDetails" to="/trading">查看详情</router-link>
                        </p>
                    </div>
                </el-col>
            </el-row>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: {
            hotProject: [Object]
        }
    }
</script>
<style lang="scss">
    @import "./sass/hotProject";
</style>
