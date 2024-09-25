<template>
    <v-card>
        <v-card-title class="title" >{{ ui.title }}</v-card-title>
        <v-card-text class="d-flex align-end justify-end">
            <div class="pre-value">{{ ui.preValue }}</div>
            <div class="post-value">{{ ui.postValue }}</div>
        </v-card-text>
    </v-card>


</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-facing-decorator';
import {Context} from "@/Context";
import {isNotUndefined} from "@/utils/Types";

@Component({})
export default class VitalsTile extends Vue {

    @Prop
    private value?: string;

    private readonly service = Context.provideVitalsService();
    private intervalId?: number;

    private readonly ui = {
        preValue: '',
        postValue: '',
        title : ''
    }

    mounted() {
        this.intervalId = setInterval(this.load, 1000);
    }

    unmounted() {
        if (isNotUndefined(this.intervalId)) {
            clearInterval(this.intervalId);
        }
    }

    private async load() {
        if (this.value === 'cpu') {
            const cpu = await this.service.get(2);
            this.ui.preValue = `${cpu.value}`;
            this.ui.postValue = `${cpu.unit}`;
            this.ui.title = 'CPU'
        }else if(this.value == 'ram-percent'){
            const ram = await this.service.get(1);
            const ramTotal = await this.service.get(0);
            const percent = (ram.value/ramTotal.value ) * 100;

            this.ui.preValue = `${Math.floor(percent)}`;
            this.ui.postValue = `%`;
            this.ui.title = 'RAM'
        }else if(this.value == 'ram'){
            const ram = await this.service.get(1);

            this.ui.preValue = `${Math.floor(ram.value / (1024 * 1024))}`;
            this.ui.postValue = `Mb`;
            this.ui.title = 'RAM'

        }else if(this.value == 'ram-total'){
            const ramTotal = await this.service.get(0);

            this.ui.preValue = `${Math.floor(ramTotal.value / (1024 * 1024))}`;
            this.ui.postValue = `Mb`;
            this.ui.title = 'TOTAL RAM'
        }
    }

}
</script>


<style scoped>

.title {
    font-size: 2vw;
}

.pre-value {
    font-size: 5vw;
}

.post-value {
    font-size: 2vw;
}
</style>