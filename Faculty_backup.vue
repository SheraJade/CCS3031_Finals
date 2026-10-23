<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import FacultySection from '@/sections/FacultySection.vue'
import CommitteeSection from '@/sections/CommitteeSection.vue'
import AdviserSection from '@/sections/AdviserSection.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <AppNavBar />
  <div class="main">
    <FacultySection />
    <CommitteeSection />
    <AdviserSection />
  </div>
</template>

<style scoped>
.main {
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
}

@media (max-width: 768px) {
  .main {
    padding-top: 130px;
  }
}
</style>
