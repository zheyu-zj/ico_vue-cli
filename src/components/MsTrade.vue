<template>
    <div class="operating">
        <el-button type="text" @click="dialogFormVisible = true" v-html="Name"></el-button>

        <el-dialog title="交易信息" :visible.sync="dialogFormVisible" class="selectedWrap">
            <!--<el-form ref="form" :model="form" label-width="85px">-->
                <!--<el-form-item :label="`${Name}信息：`">-->
                    <!--<el-input v-model="form.message" placeholder="6至24字"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item :label="`${Name}价格：`">-->
                    <!--<el-input v-model="form.price" :placeholder="`请输入${Name}价格`"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item :label="`${Name}数量：`">-->
                    <!--<el-input v-model="form.Quantity"-->
                              <!--:placeholder="`请输入${Name}数量（${data.coin[coinIndex].Fee}%手续费）`"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="交易额度：">-->
                    <!--<el-input v-model="form.Quota"-->
                              <!--:placeholder="`${data.coin[coinIndex].min}元≤单笔交易额≤${data.coin[coinIndex].max}元`"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="交易密码：">-->
                    <!--<el-input v-model="form.password" placeholder="请输入交易密码"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="图形验证：">-->
                    <!--<el-input v-model="form.code" placeholder="请输入验证码"></el-input>-->
                <!--</el-form-item>-->
                <!--<p>-->
                    <!--<span>{{data.coin[coinIndex].name}}</span>-->
                    <!--本日剩余交易额度-->
                    <!--<span>{{data.coin[coinIndex].usableAmount}}</span>-->
                    <!--元。-->
                    <!--<router-link to="/担保交易说明">担保交易说明</router-link>-->
                <!--</p>-->
            <!--</el-form>-->
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                coinIndex: 0,
                dialogFormVisible: false,
//                form: {
//                    Currency: '',
//                    Specify: false,
//                    message: '',
//                    price: '',
//                    Quantity: '',
//                    Quota: '',
//                    password: '',
//                    code: '',
//                },
            }
        },
        props: {
            data: [Array],
            Name: [String],
        },
        methods: {
            coinIndexs() {
                this.coinIndex = this.form.Currency;
            },
            onSubmit() {
                console.log('submit!');
            },
        }
    }
</script>
<style lang="scss">
    @import "sass/MsTrade";
</style>