<template>
    <div id="rateMain">
        <h2>费率标准</h2>
        <table>
            <thead>
            <tr>
                <th>服务</th>
                <th>货币</th>
                <th>服务描述</th>
                <th>最小金额</th>
                <th>最大金额</th>
                <th>手续费</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowspan="2" class="tbodyTh">充值</td>
                <td rowspan="2">人民币</td>
                <td>快捷支付</td>
                <td rowspan="2">1000元</td>
                <td rowspan="2">由发卡行制定</td>
                <td rowspan="2">0.2%</td>
            </tr>
            <tr>
                <td>网银充值</td>
            </tr>
            <tr>
                <td class="tbodyTh">提现</td>
                <td>人民币</td>
                <td>银行卡提现</td>
                <td>100元</td>
                <td>
                        <span>
                            单笔不超过5万元人民币；<br>
                        单日累积不超过30万元人民币。
                        </span>
                </td>
                <td>
                    0.5%<br>
                    （单笔最低2元）
                </td>
            </tr>
            <tr>
                <td class="tbodyTh">提币</td>
                <td>数字货币</td>
                <td>提币</td>
                <td>100(个)</td>
                <td>
                        <span>
                        单笔不超过10万(个)；<br>
                        单日累计不超过10万(个)。
                        </span>
                </td>
                <td>0.5%</td>
            </tr>
            <tr>
                <td rowspan="2" class="tbodyTh">担保交易</td>
                <td>数字货币</td>
                <td>货币寄售</td>
                <td>
                        <span>
                            折合 <br>
                        100元人民币
                        </span>
                </td>
                <td>
                        <span>
                            折合 <br>
                        单笔不超过5万元人民币，<br>
                        单日累计不超过50万人民币。
                        </span>
                </td>
                <td rowspan="2">双向0.5%</td>
            </tr>
            <tr>
                <td>人民币</td>
                <td>货币求购</td>
                <td>100元人民币</td>
                <td>
                        <span>
                            单笔不超过5万元人民币，<br>
                        单日累计不超过50万人民币。
                        </span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="scss">
    @import "./help";
</style>