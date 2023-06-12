<template>
  <div class="copyright">
    <p>Simple card game using VueJs</p>
  </div>
</template>
<style lang="css" scoped>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  color: var(--light);
  z-index: 3;
  font-size: 0.6rem;
}
@media (min-width: 992px) {
  .copyright {
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.5rem;
    color: var(--light);
    z-index: 3;
    font-size: 1.5rem;
  }
  .copyright a {
    color: #f4dc26;
  }
}
</style>
