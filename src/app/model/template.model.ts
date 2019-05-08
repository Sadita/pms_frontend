import { Kpi } from './kpi.model';

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

export interface TemplateCreate {
    name: string;
    tabs: TabCreate[];
}

export interface TabCreate {
    id: number;
        kpis: KpiCreate[];
}

export interface KpiCreate {
    id: number;
}