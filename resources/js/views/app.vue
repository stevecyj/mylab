<template>
    <div>
        <!-- <Calculator /> -->
        <Menu />
        <router-view/>
    </div>
</template>

<script>
// import Calculator from '../components/Calculator.vue'
import Menu from '../components/Menu.vue'
export default {
    // name: 'app',
    components: {
        // Calculator,
        Menu,
    }
};
</script>

<style lang="css"></style>