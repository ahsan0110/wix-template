<template>
  <footer>
    <div class="footer-head reveal">
      <h1>T. KENSINGTON</h1>
    </div>
    <div class="footer-bottom">
      <div class="footer-left reveal">
        <div class="icons">
          <a href="#" target="_blank" class="icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path fill="currentColor"
                d="M18.244 2H21.5l-7.51 8.58L23 22h-6.828l-5.36-6.682L4.5 22H1.243l8.143-9.29L1 2h6.914l4.88 6.062L18.244 2Zm-1.09 17.31h1.86L7.09 4.56H5.1l12.054 14.75Z" />
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" target="_blank" class="icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
            </svg>
          </a>

          <!-- TikTok -->
          <a href="#" target="_blank" class="icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path fill="currentColor"
                d="M17.5 3.1c-.9-.6-1.6-1.4-2-2.3h-3v14.4c0 1.1-.9 2-2 2s-2-.9-2-2 1-2 2.2-2c.3 0 .5 0 .8.1V9.5c-.3 0-.5-.1-.8-.1-3.2 0-5.7 2.6-5.7 5.8S7 21 10.3 21c3.2 0 5.7-2.6 5.7-5.7V8.5c1 .7 2.1 1.2 3.3 1.3V6.7c-.8-.1-1.7-.4-2.6-.9Z" />
            </svg>
          </a>
        </div>
        <div class="address">
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
          <p>500 Terry Francine St. San</p>
          <p>Francisco, CA 94158</p>
        </div>
      </div>
      <div class="footer-right reveal">
        <div class="foot-para">
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div class="copyright">
          <p>© 2035 by T. Kensington. Powered and secured by ahsan</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      visibleFooter: false,
    };
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }


}
</script>

<style>

</style>