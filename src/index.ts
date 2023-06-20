
import { resolve } from 'path';
import { writeFileSync, readdirSync } from 'fs';


export type ConfigItem = {
    url: string;
    name: string;
}

export type SwaggerConfig = {
    urls: ConfigItem[];
}



const buildConfig = () => {
    const configFilename = 'swagger-config.json';
    const swaggerDocumentDirectory = resolve(__dirname,'../docs');
    const swaggerDocumentFiles = readdirSync(swaggerDocumentDirectory).map((file) => file) || [];

    const configuration: SwaggerConfig = { urls: [] };
    configuration.urls = swaggerDocumentFiles.map((file) => {
        return {
            url: `./${file}`,
            name: `${file.replace('.json', '')} api`
        }
    });
   
    writeFileSync(resolve(__dirname, `../swagger/${configFilename}`), JSON.stringify(configuration, null, 2));
    
}

buildConfig();