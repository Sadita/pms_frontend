export interface Kpi {
    id: number;
    name: string;
    creationdate: Date;
    levels: [{
        id: number;
        name: string;
        value: number;
        rank: number;
        kpiId: number
    }]
}