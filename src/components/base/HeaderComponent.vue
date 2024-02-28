<template>
    <header class="header" data-header>
        <div class="container">
    
          <a href="#home" class="logo" style="min-width: 200px;">
            <img src="@/assets/images/logo.png" width="60" height="60" alt="Logo - Home" style="border-radius: 50%;">
          </a>
          <nav class="navbar" data-navbar>
    
            <button class="close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
    
            <ul class="navbar-list">
    
              <li class="navbar-item">
                <a href="#home" class="navbar-link hover-underline active">
                  <div class="separator"></div>
    
                  <span class="span">Trang chủ</span>
                </a>
              </li>
    
              <li class="navbar-item">
                <a href="#menu" class="navbar-link hover-underline">
                  <div class="separator"></div>
    
                  <span class="span">Thực đơn</span>
                </a>
              </li>
    
              <li class="navbar-item">
                <a href="#about" class="navbar-link hover-underline">
                  <div class="separator"></div>
    
                  <span class="span">Chúng tôi</span>
                </a>
              </li>
    
              <li class="navbar-item">
                <a href="#contact" class="navbar-link hover-underline">
                  <div class="separator"></div>
    
                  <span class="span">Liên lạc</span>
                </a>
              </li>
    
            </ul>
    
    
          </nav>
    
          <a v-if="!userInfo" href="/login" class="btn">
            <span class="text text-1">Đăng nhập</span>
            <span class="text text-2" aria-hidden="true">Đăng nhập</span>
          </a>
            
          <el-dropdown @command="handleCommand" v-if="userInfo">
            <span class="btn el-dropdown-link">
              <span class="text text-1">Xin chào {{ userInfo.fullname }}
                <img :src="userInfo.avt" width="35" height="35" alt="Avatar" style="border-radius: 50%;display: inline;">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <span class="text text-2" aria-hidden="true">Xin chào {{ userInfo.fullname }}
                <img :src="userInfo.avt" width="35" height="35" alt="Avatar" style="border-radius: 50%;display: inline;">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </span>
            <el-dropdown-menu>
              <el-dropdown-item command="info">Thông tin cá nhân</el-dropdown-item>
              <el-dropdown-item command="account">Quản lí tài khoản</el-dropdown-item>
              <el-dropdown-item command="menu">Quản lí thực đơn</el-dropdown-item>
              <el-dropdown-item command="logout">Đăng xuất</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
    
          <div class="overlay" data-nav-toggler data-overlay></div>
    
        </div>
    </header>
</template>

<script>
export default {
    name:'HeaderComponent',
    data() {
      return {
      };
    },
    props: {
      userInfo :Object,
    },
    created(){
    },
    methods:{
      handleCommand(command) {
        switch (command) {
          case 'info':
            this.handleInfo();
            break;
          case 'account':
            this.handleAccount();
            break;
          case 'menu':
            this.handleMenu();
            break;
          case 'logout':
            this.logOutHandler();
            break;
          default:
            break;
        }
      },
      logOutHandler(){
        this.$parent.showLogoutDialog();
      }
    }
}
</script>
<style scoped>

</style>
