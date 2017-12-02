<template>
  <div @keyup.enter="submitForm('loginForm')" class="login-box">
    <el-row type="flex" justify="center" align="middle" style="height: 100%">
      <el-col :span="6">
        <el-card>
          <h1 slot="header">登录</h1>
          <el-form :model="loginForm" ref="loginForm" :rules="rules" label-position="right" label-width="60px">
            <el-form-item label="用户名" prop="username">
              <el-input placeholder="请输入用户名" v-model="loginForm.username" autoComplete="off">
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" autoComplete="off">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
              <!--<el-button @click="resetForm('loginForm')">重置</el-button>-->
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default{
    name: 'login',
    data(){
      const validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          this.login(this.loginForm).then(() => {
            callback();
          }).catch((err) => {
            console.log(err);
            callback(new Error('用户名和密码不正确'));
          })
        }
      };
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'submit'}
          ]
        }
      }
    },
    mounted(){
      if (this.$store.state.token != '' && this.$store.state.token != undefined) {
        this.$message({
          type: 'success',
          message: '自动登录'
        });
        this.$router.push('/');
      }
    },
    methods: {
      ...mapActions(['login']),
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              type: 'success',
              message: '登录成功'
            });
            if (this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect);
            } else {
              this.$router.push('/');
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-box {
    background-color: #e0fff6;
    height: 100%;
    h1 {
      text-align: center;
    }
  }
</style>
