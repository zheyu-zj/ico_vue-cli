<template>
    <div id="tradingMain">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <p class="swiper-slide" v-for="data in newMessages">{{data}}</p>
            </div>
        </div>
        <ul class="tableMenu">
            <li v-bind:class="{back : Consignment}" @click="Consignment = true;Buying = false">寄售货币</li>
            <li v-bind:class="{back : Buying}" @click="Consignment = false;Buying = true">求购货币</li>
            <li class="link">
                <router-link to="/foo">交易管理</router-link>
            </li>
            <li class="bord">
                <Pop-upBox :data="login" :Name="ConsignmentName" :icon="ConsignmentIcon"></Pop-upBox>
            </li>
            <li class="bord">
                <Pop-upBox :data="login" :Name="BuyingName" :icon="BuyingIcon"></Pop-upBox>
            </li>
        </ul>
        <el-table id="dataTable" :data="dataTable" style="width: 100%">
            <el-table-column prop="id" label="全部币种" :filters="[{ text: '0', value: '0' }, { text: '1', value: '1' }]"
                             :filter-method="filterId" filter-placement="bottom-end">
                <template scope="scope">
                    <img :src="scope.row.img" alt="">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="Information"
                    width="214px"
                    label="寄售信息">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="货币价格(￥)"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="Quantity"
                    label="货币数量"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="totalPrice"
                    label="总价(￥)">
            </el-table-column>
            <el-table-column
                    label="安全保障">
                <template scope="scope">
                    <img v-if="scope.row.Guarantee" src="" alt="">
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <template scope="scope">
                    <MsTrade v-if="scope.row.uid === login.uid" :data="dataTable" :Name="Revoked"></MsTrade>
                    <MsTrade v-else-if="scope.row.type" :data="dataTable" :Name="buy"></MsTrade>
                    <MsTrade v-else="scope.row.type" :data="dataTable" :Name="sell"></MsTrade>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                layout="prev, pager, next"
                :page-size="10"
                :total="dataTable.length">
        </el-pagination>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import {mapState} from 'vuex';

    export default{
        data(){
            return {
                Consignment: true,
                Buying: false,
                ConsignmentName: "寄售",
                ConsignmentIcon: "<i>1231</i>",
                BuyingName: "求购",
                BuyingIcon: "<i>3123</i>",
                Revoked: '撤销',
                buy: '购买',
                sell: '出售',
            };
        },
        components: {
            'Pop-upBox': function (resolve) {
                require(['@/components/Pop-upBox.vue'], resolve)
            },
            'MsTrade': require('@/components/MsTrade.vue')
        },
        created() {
            this.load();
        },
        watch: {
            '$route': 'load'
        },
        computed: mapState({
            login: state => state.user.login,
            newMessages: state => state.trade.newMessages,
            dataTable: state => state.trade.dataTable
        }),
        updated() {
            let swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop: true,
                play: 2000,
                autoplay: 2000,
                speed: 1500,
                autoplayDisableOnInteraction: false,
            })
        },
        methods: {
            filterId(value, row) {
                return row.id + '' === value;
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            load(){
                this.$store.dispatch('get_trade');
            },
        }
    }
</script>
<style lang="scss">
    @import "index";
</style>