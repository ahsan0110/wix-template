<template>
    <section class="black-card-section">
        <div class="black-card">
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
    }
}
</script>