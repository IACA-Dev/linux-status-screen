<template>
    <div class="w-100 text-center custom-text">{{ ui.ip }}</div>
    <div class="w-100 text-center custom-text">{{ ui.mac }}</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import {Context} from "@/Context";
import {isNotUndefined} from "@/utils/Types";

@Component({})
export default class LocalInterfaceComponent extends Vue {

    private readonly service = Context.provideNetworkService();
    private readonly localInterfaceName = Context.provideLocalInterfaceName();

    private readonly ui = {
        ip: '-',
        mac: '-'
    }

    private intervalId?: number;

    async mounted() {
        this.intervalId = setInterval(() => {
            this.load();
        }, 10000);

        await this.load();
    }

    unmounted() {
        if (isNotUndefined(this.intervalId))
            clearInterval(this.intervalId);
    }

    private async load() {
        try {
            const interfaceModel = await this.service.getInterfaceByName(this.localInterfaceName);
            this.ui.ip = interfaceModel.ip;
            this.ui.mac = interfaceModel.mac;
        }catch (err){
            console.error(err);
            this.ui.ip = '-';
        }
    }
}
</script>


<style scoped>

.custom-text {
    font-size: 10vw;
    color: white;
}

</style>