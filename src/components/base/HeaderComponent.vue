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
    
          <a href="#" class="btn btn-secondary">
            <span class="text text-1">Tạo thực đơn</span>
    
            <span class="text text-2" aria-hidden="true">Tạo thực đơn</span>
          </a>
    
          <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span class="line line-1">Trang chủ</span>
            <span class="line line-2">Thực đơn</span>
            <span class="line line-3">Chúng tôi</span>
            <span class="line line-4">Liên lạc</span>
          </button>
    
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
}
</script>
<style scoped>

</style>
