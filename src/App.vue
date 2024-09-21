<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>