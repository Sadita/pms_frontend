export interface Template {
    id: number;
    name: string;
    tabs: [{
        id: number;
        title: string;
        kpis: [{
            id: number;
            name: string;
            creationdate: Date;
            levels: [{
                name: string;
                value: number;
            }]
        }]
    }]
}