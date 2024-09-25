import {VitalsService} from "@/services/VitalsService";
import {VitalsModel} from "@/models/VitalsModel";


export class VitalsServiceImpl implements VitalsService {


    private readonly apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    // ---------------------------------------------------------------------------------------------------------------

    async getAll(): Promise<VitalsModel[]> {
        const response = await fetch(`${this.apiUrl}/vitals`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json() as VitalsModel[];
    }

    async get(id: number): Promise<VitalsModel> {
        const response = await fetch(`${this.apiUrl}/vitals/${id}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json() as VitalsModel;
    }


}