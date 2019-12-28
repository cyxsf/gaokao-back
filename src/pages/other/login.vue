<template>
  <div class="login-page">
    <section class="form-container">
      <span class="title">高考志愿推荐后台管理系统</span>
      <el-form class="login-form" :model="form" ref="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item  label="密码"  prop="password">
          <el-input :type="showPwd?'text':'password'" v-model="form.password"></el-input>
        </el-form-item>
        <span class="icons"  @click="showPwd = !showPwd">
          <icon-svg class="icon" :icon-class="showPwd?'icon-yanjing_kai':'icon-yanjing_bi'"></icon-svg>
        </span>
        <el-form-item >
          <el-button class="login-btn" @click="userLogin('form')">登录</el-button>
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
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      pwd: '',
      showPwd: false
    }
  },
  methods: {
    userLogin (formName) {
      let uid = this.form.username
      let pwd = this.form.password
      this.$refs[formName].validate((data) => {
        this.axios.post('/api/user/userSelect', { // 判断是否存在该用户
          uid
        }).then(res => {
          if (res.data.length === 0) {
            this.axios.post('/api/user/userReg', { // 不存在时自动进行注册
              uid, pwd
            }).then(res => {
              this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              })
              this.$router.push('/home')
            })
          } else {
            this.axios.post('/api/user/userLogin', { // 判断用户名和密码是否输入正确
              uid, pwd
            }).then(res => {
              if (res.data.length === 0) {
                this.$message.error('用户名或密码错误')
              } else {
                this.$message({
                  message: '恭喜你，登录成功',
                  type: 'success'
                })
                this.$router.push('/home')
              }
            })
          }
        })
      })
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
