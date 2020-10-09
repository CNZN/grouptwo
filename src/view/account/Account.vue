<template>
  <div class="account">
    <Header2 title="账号"></Header2>
    <!-- 登录 -->
    <div class="login" v-if="flag == 'login'">
      <h1>登录页面</h1>
      <van-form @submit="onSubmit1">
        <van-field
          v-model="username1"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <span class="span1" @click="toregister">现在去注册</span>
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="flag == 'register'">
      <h1>注册页面</h1>
      <van-form @submit="onSubmit2">
        <van-field
          v-model="username2"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <span class="span2" @click="tologin">已注册去登陆</span>
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 登陆后 -->
    <div class="after" v-if="flag == 'after'">
      
    </div>
  </div>
</template>

<script>
import Header2 from "../../components/Header2";
import { Dialog } from "vant";
export default {
  name: "Account",
  components: {
    Header2,
  },
  data() {
    return {
      username1: "",
      password1: "",
      username2: "",
      password2: "",
      flag: "login",
    };
  },
  methods: {
    onSubmit1(values) {
      console.log("submit", values);
      var username = this.username1;
      var password = this.password1;
      this.$http.post("/login2", { username, password }).then((res) => {
        console.log(res)
        if (res.data.code === 20000) {
          Dialog({ message: res.msg });
          this.flag = "after";
        }
      });
    },
    onSubmit2(values) {
      console.log("submit", values);
      var username = this.username2;
      var password = this.password2;
      this.$http.post("/login1", { username, password }).then((res) => {
        if (res.data.code === 20000) {
          Dialog({ message: res.msg });
          this.flag = "login";
        }
      });
    },
    toregister() {
      this.flag = "register";
    },
    tologin() {
      this.flag = "login";
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  font-size: 35px;
  text-align: center;
  font-weight: 900;
}
.span1,
.span2 {
  font-size: 15px;
  color: red;
  font-weight: 400;
}
</style>