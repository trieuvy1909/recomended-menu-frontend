<template>
  <div class="background-login">
    <LoadingComponent ref="loadingComponent"/>
    <form class="form-login">
      <div style="display: flex;justify-content: center;">
        <img src="@/assets/images/logo.png" width="70" height="70" alt="Logo - Home" style="border-radius: 20%;">
      </div>
      <div class="mb-4">
        <label class="form-label" for="email">Email</label>
        <input v-model="email" type="email" id="email" class="form-control input-login" />
      </div>

      <div class="mb-4">
        <label class="form-label" for="password">Mật khẩu</label>
        <input v-model="password" type="password" id="password" class="form-control input-login" />
      </div>

      <div v-if="isRegister" class="mb-4">
        <label class="form-label" for="re-password">Xác nhận mật khẩu</label>
        <input v-model="rePassword" type="password" id="re-password" class="form-control input-login" />
      </div>

      <div v-if="isLogin" class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="remember-me" checked />
            <label class="form-check-label" for="remember-me"> Ghi nhớ phiên đăng nhập</label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Quên mật khẩu?</a>
        </div>
      </div>

      
      <div v-if="isRegister" class="text-center">
        <button type="button" class="mb-4 btn">Đăng kí</button>
      </div>
      <div v-if="isLogin" class="text-center">
        <button type="button" class="mb-4 btn" @click="loginHandler()">Đăng nhập</button>
      </div>
      <div class="text-center"> 
        <!-- <p>hoặc tham gia bằng:</p>
        <a class="btn mx-1" href="https://facebook.com" target="_blank">Facebook</a>
        <a class="btn mx-1" href="https://google.com" target="_blank">Google</a> -->
        <div v-if="isLogin">
          <p>Bạn chưa đăng kí?</p>
          <button type="button" class="mb-4 btn" @click="changeLoginOrRegister()">Tham gia ngay</button>
        </div>
        <div v-else>
          <p>Bạn đã có tài khoản?</p>
          <button type="button" class="mb-4 btn" @click="changeLoginOrRegister()">Đăng nhập ngay</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>


export default {
    name:'LoginPage',
    components:{
    },
    data() {
      return {
        isLogin:true,
        isRegister:false,
        email:'',
        password:'',
        rePassword:'',
      };
    },
    created(){
      window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.handleKeyDown);
    },
    methods:{
      handleKeyDown(event) {
        if (event.key === 'Enter') {
          if(this.isLogin){
            this.loginHandler();
          }
        }
      },
      changeLoginOrRegister(){
        this.isLogin = !this.isLogin;
        this.isRegister = !this.isRegister;
      },
      async loginHandler(){
        let isPassLogin = false;
        let userInfo = {};
        this.$refs.loadingComponent.isShowLoading = true;
        let param = {};
        param.email = this.email;
        param.password  = this.password
        await this.$http.post('login',param)
        .then((res)=>{ 
          if(res.data.status == 0){
            isPassLogin = true;
            userInfo = res.data.data;
            this.$swal('Thành công!', res.data.message, 'success');
          }
        })
        .catch((err)=>{
          this.$swal('Thất bại!', err.response.data.message, 'error');
        })
        .finally(()=>{
          this.$refs.loadingComponent.isShowLoading = false;
        });
        if(isPassLogin) { 
          localStorage.setItem('userInfo', JSON.stringify(userInfo)); 
          this.$router.push('/');
        }
      }
    }
}
</script>
<style scoped>
.form-login{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  border: 3px solid var(--gold-crayola);
  padding:50px;
}
.background-login{
  background-image: url('../../src/assets/images/hero-slider-1.jpg');
  height:100vh;
  background-size:cover;
  background-position: center;
}
.input-login{
  height: 45px;
  font-size: 14px;
  border-radius: 10px;
  border: 3px solid var(--gold-crayola);
}
</style>

