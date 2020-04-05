<template>
    <div>
        <h1 color="primary">
            <slot></slot>
        </h1>
        <v-divider class="hrSpace" ></v-divider>
    </div>
</template>

<script>
export default {
    name: "SectionHead"
}
</script>
<style scoped>
    .hrSpace{
        margin-bottom: 10px;
    }
</style>