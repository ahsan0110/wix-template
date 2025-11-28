<template>
    <section class="info-section reveal">
        <p class="top-p">{{ topText }}</p>
        <h1 class="info-head">{{ heading }}</h1>
        <p class="bottom-p">{{ bottomText }}</p>
    </section>
</template>

<script>
export default {
    name: "Information",

    props: {
        topText: { type: String, default: "About us" },
        heading: { type: String, default: "OUR EXPERTISE" },
        bottomText: { type: String, default: "" },
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

};
</script>