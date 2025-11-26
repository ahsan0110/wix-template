<template>
  <div class="green-parent" :class="{ 'fade-in': pageLoaded }">
    <div ref="lineDiv" class="div-line div-grey" :class="{ animate: isVisible[0] }"></div>
    <div ref="xDiv" class="div-x div-grey" :class="{ animate: isVisible[1] }"></div>
    <div ref="plusDiv" class="div-plus div-grey" :class="{ animate: isVisible[2] }"></div>

    <div class="div-strategy">
      <h1>STRATEGY DEVELOPMENT</h1>
      <p>Custom marketing strategies with SEO, PPC, social media & content marketing</p>
    </div>

    <div class="div-dark-grey"></div>

    <div class="div-green-ni66a">
      <img src="/green_ni66a.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoaded: false,
      isVisible: [false, false, false],
    };
  },
  mounted() {
    // Fade in the page
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100); // tiny delay for smooth effect

    // Intersection Observer for first 3 divs
    const divs = [this.$refs.lineDiv, this.$refs.xDiv, this.$refs.plusDiv];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            this.isVisible[index] = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    divs.forEach((div) => observer.observe(div));
  },
};
</script>

<style>
/* Page fade-in */
.green-parent {
  opacity: 0;
  transition: opacity 1.2s ease;
}
.green-parent.fade-in {
  opacity: 1;
}

/* Div styling */
.div-grey {
  background: #e0e0e0;
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

/* Base lines */
.div-grey::before,
.div-grey::after {
  content: "";
  position: absolute;
  width: 60%;
  height: 2px;
  background-color: #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transform-origin: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Hide ::after for horizontal line */
.div-line::after { display: none; }

/* X & + will use both lines */
/* Final rotations using CSS variables */
.div-line.animate::before { animation: rotateDiv 1.5s forwards; --final-rotate: 0deg; }
.div-x.animate::before { animation: rotateDiv 1.5s forwards; --final-rotate: 45deg; }
.div-x.animate::after  { animation: rotateDiv 1.5s forwards; --final-rotate: -45deg; }
.div-plus.animate::before { animation: rotateDiv 1.5s forwards; --final-rotate: 0deg; }
.div-plus.animate::after  { animation: rotateDiv 1.5s forwards; --final-rotate: 90deg; }

@keyframes rotateDiv {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) rotate(var(--final-rotate));
    opacity: 1;
  }
}

</style>
