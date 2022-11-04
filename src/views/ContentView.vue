<template>
  <div>
    <router-link :to="{ name: 'SecretClinic' }"
      >이해건의 은밀한 교습실</router-link
    >
    |
    <router-link :to="{ name: 'TodaysFortune' }">행운의 준용쿠키</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
