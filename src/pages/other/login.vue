<template>
  <div class="login-page">
    <section class="form-container">
      <span class="title">高考志愿推荐后台管理系统</span>
      <el-form class="login-form" ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item  label="密码">
          <el-input :type="showPwd?'text':'password'" v-model="form.password"></el-input>
        </el-form-item>
        <span class="icons"  @click="showPwd = !showPwd">
          <icon-svg class="icon" :icon-class="showPwd?'icon-yanjing_kai':'icon-yanjing_bi'"></icon-svg>
        </span>
        <el-form-item >
          <el-button class="login-btn" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示：</p>
      <p class="tip">未登录过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      pwd: '',
      showPwd: false
    }
  },
  methods: {
    onSubmit () {

    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  display: flex;
  height: 100%;
  background: #324057;
  align-items: center;
  justify-content: center;
}
.form-container {
  position: relative;
  width: 450px;
  height: 320px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background: #ffffff;
  .icons {
  position: absolute;
  right: 110px;
  top: 135px;
  cursor: pointer;
  }
  .login-btn {
  width: 100%;
  background: #14334e;
  color: #ffffff;
  }
}
.title {
  font-size: 18px;
  color: #14334e;
}
.login-form {
  width: 80%;
  margin-top: 20px;
}

.tip {
  font-size: 12px;
  color: red;
}
</style>
