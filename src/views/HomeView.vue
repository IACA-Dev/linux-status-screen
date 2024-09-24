<template>
    <main>
        <horloge-component class="horloge"/>
        <vitals-tile/>
    </main>
</template>

<script lang="ts">


import {Component, Vue} from "vue-facing-decorator";
import HorlogeComponent from "@/components/business/HorlogeComponent.vue";
import VitalsTile from "@/components/business/VitalsTile.vue";

@Component({
    components: {VitalsTile, HorlogeComponent}
})

export default class HomeView extends Vue {



    async mounted(): Promise<void> {

    }


}
</script>

<style scoped>

main {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;

    background-color: #00b80b;
}

.horloge {
    font-size: 10vw;
    font-weight: normal;

    color: white;
}

</style>