<template>
    <div id="loginMain">
        <form action="">
            <div class="loginWrap">
                <h2>用户登录</h2>
                <label for="" data-content="" class="mobile">
                    <input type="text" placeholder="请输入手机号码">
                </label>
                <label for="" data-content="" class="password">
                    <input type="text" placeholder="请输入登录密码">
                    <router-link tabindex="-1" to="/register">忘记密码</router-link>
                </label>
                <label for="" data-content="" class="captcha">
                    <input type="text" placeholder="请输入验证码">
                    <img src="" alt="" tabindex="-1">
                </label>
                <button type="submit">登录</button>
                <p>没有帐号？<router-link to="/register">立即注册</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="scss">
    @import "./index";
</style>
