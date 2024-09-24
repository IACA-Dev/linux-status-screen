<template>



</template>

<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import {Context} from "@/Context";

@Component({})
export default class VitalsTile extends Vue {

    private readonly service = Context.provideVitalsService();

    async mounted(){
        console.log(await this.service.getAll());
    }

}
</script>


<style scoped>

</style>