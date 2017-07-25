<template>
    <div id="coinLockMain">
        <h2>币加锁简介</h2>
        <el-row>
            <el-col :span="12">
                <div class="bg-coinLock"></div>
            </el-col>
            <el-col :span="12">
                <h4>币加锁</h4>
                <p class="coinLock_p">
                    在链金盒子平台发起的众筹项目，可以使用本平台特有的币加锁功能发放货币，能有效地维护后续上线的交易市场的稳定。使用该功能的众筹项目，在众筹成功后，筹到币的用户会按固定周期解锁数字货币，已解锁的数字货币用户可进行自由操作，以此稳定企业实体资产的融资扩张和投资者资产增值的良性循环。
                </p>
            </el-col>
        </el-row>
        <h2>币加锁特点</h2>
        <el-row>
            <el-col class="coinLock-box" :span="6">
                <div class="bg-coinLock-ms"></div>
                <p class="coinLock-ms">安全存储</p>
            </el-col>
            <el-col class="coinLock-box" :span="6">
                <div class="bg-coinLock-ms"></div>
                <p class="coinLock-ms">标准化释放</p>
            </el-col>
            <el-col class="coinLock-box" :span="6">
                <div class="bg-coinLock-ms"></div>
                <p class="coinLock-ms">稳定市场</p>
            </el-col>
            <el-col class="coinLock-box" :span="6">
                <div class="bg-coinLock-ms"></div>
                <p class="coinLock-ms">良性循环</p>
            </el-col>
        </el-row>
        <h2>已服务币种</h2>
        <el-row>
            <el-col class="coinLock-box" :span="4" v-for="(i,index) in 6" :key="index">
                <div class="bg-coinLock-st"></div>
                <p>安全存储</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="scss">
    @import './index';
</style>