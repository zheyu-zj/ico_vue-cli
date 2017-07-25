<template>
    <el-menu router mode="horizontal" class="project" @select="handleSelect">
        <el-menu-item v-for="data in project" :key="data.id" :index="`/ico/${data.id}`" class="project_wrap">
            <div class="img_wrap">
                <p v-if="data.status === '0'" class="finish">展示中</p>
                <p v-if="data.status === '1'" class="finish">预热中</p>
                <p v-if="data.status === '2'" class="finish">进行中</p>
                <p v-if="data.status === '3'" class="finish">处理中</p>
                <p v-if="data.status === '4'" class="finish">已结束</p>
                <img :src="data.img" alt="">
                <span>{{data.type}}</span>
            </div>
            <div class="Introduction">
                <h3>{{data.title}}</h3>
                <h6>众筹进度：<span>{{data.schedule}}%</span></h6>
                <el-progress :percentage="data.schedule" :show-text="false"></el-progress>
                <div class="seeDetailsWrap">
                    <p>
                        <span>{{data.complete}}份</span> <br>
                        已募集
                    </p>
                    <router-link class="seeDetails" :to="`/ico/${data.id}`">查看详情</router-link>
                </div>
            </div>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: {
            project: [Array]
        },
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
    @import "sass/project";
</style>
