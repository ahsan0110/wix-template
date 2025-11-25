<template>
    <section class="hero-section">
        <div class="hero-img-layer"></div>
        <div class="section-card">
            <h1>TAILORED <br>MARKETING <br>STRATEGIES</h1>
            <h4>Empowering Businesses Digitally</h4>
            <button id="hero-btn" class="btn">Explore More</button>
        </div>
    </section>
</template>

<script>
export default {



    mounted() {
        const layer = document.querySelector(".hero-img-layer");
        let lastScroll = window.scrollY;
        let offset = 0;

        window.addEventListener("scroll", () => {
            const current = window.scrollY;
            const delta = current - lastScroll;

            offset += delta * -0.5; // subtle drift
            layer.style.transform = `translateX(${offset}px)`;

            lastScroll = current;
        });
    }


}
</script>