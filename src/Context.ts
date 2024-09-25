import {VitalsService} from "@/services/VitalsService";
import {isUndefined} from "@/utils/Types";
import {VitalsServiceImpl} from "@/services/VitalsServiceImpl";
import getEnv from "@/utils/Environment";
import {NetworkService} from "@/services/NetworkService";
import {NetworkServiceImpl} from "@/services/NetworkServiceImpl";

export class Context {

    private static readonly API_URL: string = getEnv('VUE_APP_API_URL') || 'localhost:8080';
    private static readonly LOCAL_INTERFACE_NAME: string = getEnv('VUE_APP_LOCAL_INTERFACE_NAME') || 'eth0';


    private static vitalsService? : VitalsService;
    private static networkService? : NetworkService;

    public static provideVitalsService() : VitalsService {
        if(isUndefined(this.vitalsService))
            this.vitalsService = new VitalsServiceImpl(this.API_URL);
        return this.vitalsService!;
    }

    public static provideNetworkService() : NetworkService {
        if(isUndefined(this.networkService))
            this.networkService = new NetworkServiceImpl(this.API_URL);
        return this.networkService!;
    }

    public static provideLocalInterfaceName() : string {
        return this.LOCAL_INTERFACE_NAME!;
    }

}