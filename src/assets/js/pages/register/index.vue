<template>
    <div id="registerMain">
        <form action="">
            <div class="registerWrap">
                <h2>用户注册</h2>
                <label for="" data-content="" class="mobile">
                    <input type="text" placeholder="请输入手机号码">
                </label>
                <label for="" data-content="" class="name">
                    <input type="text" placeholder="请输入昵称(支持数字、字母、下划线)">
                </label>
                <label for="" data-content="" class="password">
                    <input type="text" placeholder="请输入登录密码">
                </label>
                <label for="" data-content="" class="password_confirmation">
                    <input type="text" placeholder="请再次输入登录密码">
                </label>
                <label for="" data-content="" class="vcode">
                    <input type="text" placeholder="请输入短信验证码">
                    <button tabindex="-1" type="button">发送验证码</button>
                    <Captcha v-if="false"></Captcha>
                </label>
                <label for="" data-content="" class="inviter_id">
                    <input type="text" placeholder="请输入邀请人ID(选填)">
                    <img src="" alt="" tabindex="-1">
                </label>
                <label for="" class="checked">
                    <el-checkbox v-model="checked">
                        我已阅读并同意
                        <router-link to="/register">链金盒子用户须知</router-link>
                    </el-checkbox>
                    <p>
                        已有帐号？
                        <router-link to="/login">直接登录</router-link>
                    </p>
                </label>
                <button type="submit">注册</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                checked: true
            }
        },
        components: {
            Captcha: require('@/components/Captcha.vue')
        }
    }
</script>
<style lang="scss">
    @import "./index";
</style>
