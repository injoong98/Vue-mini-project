<template>
  <div style="background-color: black">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'SecretClinic' }"
      >이해건의 은밀한 상담실</router-link
    >
    |
    <router-link :to="{ name: 'TodaysFortune' }">행운의 준용쿠키</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
#sidebar-wrapper {
  padding-left: 0px;
}
</style>
