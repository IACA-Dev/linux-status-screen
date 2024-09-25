import {InterfaceModel} from "@/models/InterfaceModel";
import {NetworkService} from "./NetworkService";


export class NetworkServiceImpl implements NetworkService {

    private readonly apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    // ---------------------------------------------------------------------------------------------------------------

    async getInterfaceByName(name: string): Promise<InterfaceModel> {
        const response = await fetch(`${this.apiUrl}/network/interface/${name}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json() as InterfaceModel;
    }

}