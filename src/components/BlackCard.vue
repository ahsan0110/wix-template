<template>
    <section class="black-card-section">
        <div class="black-card reveal">
            <p>{{ para }}</p>
            <h1 v-html="title"></h1>
        </div>
    </section>
</template>

<script>
export default {
    name: "BlackCard",
    props: {
        para: { type: String, default: "Innovative Strategies" },
        title: { type: String, default: "MARKETING <br>SOLUTIONS <br>EXPERTS" },
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