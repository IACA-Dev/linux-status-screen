import {VitalsService} from "@/services/VitalsService";
import {isUndefined} from "@/utils/Types";
import {VitalsServiceImpl} from "@/services/VitalsServiceImpl";
import getEnv from "@/utils/Environment";

export class Context {

    private static readonly VITALS_API_URL: string = getEnv('VUE_APP_VITALS_API_URL')!;


    private static vitalsService? : VitalsService;

    public static provideVitalsService() : VitalsService {
        if(isUndefined(this.vitalsService))
            this.vitalsService = new VitalsServiceImpl(this.VITALS_API_URL);
        return this.vitalsService!;
    }

}