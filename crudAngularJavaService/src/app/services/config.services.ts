export class ConfigService {
 
    private urlService:string;
 
    constructor(){
 
        this.urlService = 'http://localhost:8088/service';
    }
 
    getUrlService(): string {
 
        return this.urlService;
    }
 
}