<template>
    <main>
        <horloge-component class="horloge"/>
        <local-interface-component/>
        <div class="vitals-container">
            <vitals-tile value="cpu" />
            <vitals-tile value="ram-percent" />
            <vitals-tile value="ram" />
            <vitals-tile value="ram-total" />
        </div>
    </main>
</template>

<script lang="ts">


import {Component, Vue} from "vue-facing-decorator";
import HorlogeComponent from "@/components/business/HorlogeComponent.vue";
import VitalsTile from "@/components/business/VitalsTile.vue";
import LocalInterfaceComponent from "@/components/business/LocalInterfaceComponent.vue";

@Component({
    components: {LocalInterfaceComponent, VitalsTile, HorlogeComponent}
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
    justify-content: start;
    align-items: center;
    flex-direction: column;

    background-color: #00b80b;
}

.horloge {
    font-size: 2.5vw;
    font-weight: normal;

    color: white;
}

.vitals-container {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    grid-template-columns: 20% 20% 20% 20%;
    gap: 10px;
}

</style>