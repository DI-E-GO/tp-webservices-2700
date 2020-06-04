export class Covid {
    country_name:string;
    cases:string;
    deaths:string;
    total_recovered:string;
    total_cases_per_1m_population:string;

    covid(country_name?:string, cases?:string, deaths?:string, total_recovered?:string, total_cases_per_1m_population?:string){
        this.country_name = country_name;
        this.cases = cases;
        this.deaths = deaths;
        this.total_recovered = total_recovered;
        this.total_cases_per_1m_population = total_cases_per_1m_population;
    }
}
