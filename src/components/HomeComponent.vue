<template>
  <div>
    <header
      class="masthead vh-100 d-flex align-items-center"
      :style="{
        backgroundImage: 'url(' + require('@/assets/back1.jpg') + ')',
      }"
    >
      <div class="container px-4 px-lg-5 text-center">
        <h1 class="mb-1" style="color: white">8반 비밀의 방</h1>
        <h3 class="mb-5" style="color: white">
          <em>반갑습니다 어서오세요</em>
        </h3>
        <router-link
          class="btn btn-primary btn-xl"
          :to="{ name: 'SecretClinic' }"
          >이해건의 은밀한 상담실</router-link
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link
          class="btn btn-primary btn-xl"
          :to="{ name: 'TodaysFortune' }"
          >행운의 준용쿠키</router-link
        >
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style>
@import url("../../public/css/styles.css");
.btn-primary {
  background-color: "#1a253c";
  border-color: "#1a253c";
}
</style>
