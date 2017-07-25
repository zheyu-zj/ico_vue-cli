<template>
    <div id="icoMain">
        <!--<div class="banner"></div>-->
        <div class="icoWarp">
            <hotProject :hotProject="hotProject"></hotProject>
            <ul class="icoTab">
                <li v-for="tab in 4" :key=" tab.id">全部</li>
            </ul>
            <project :project="allProject"></project>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-size="9"
                    layout="prev, pager, next"
                    :total="allProject.length"
                    class="pages">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {};
        },
        components: {
            hotProject: function (resolve) {
                //异步组件写法
                require(['@/components/hotProject.vue'], resolve)
            },
            project: function (resolve) {
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
            allProject: state => state.ico.allProject
        }),
        methods: {
            load(){
                this.$store.dispatch('get_indexProject');
                this.$store.dispatch('get_allProject');
            },
            handleSelect(key, keyPath) {
//                console.log(key, keyPath);
                console.log(this.$store.state)
            },
            handleSizeChange(val) {
//                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>
<style lang="scss">
    @import "./index";
</style>