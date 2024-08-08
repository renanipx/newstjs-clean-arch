import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env.config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig{
  constructor(private configService:ConfigService){

  }

  getAppPort(): number {
    const port = this.configService.get<string>('PORT'); // Assume que o retorno é string ou undefined
    const portNumber = Number(port);

    // Verifica se o valor convertido é um número válido e não NaN
    if (isNaN(portNumber)) {
      console.warn('PORT environment variable is not set correctly, defaulting to 3000.');
      return 3000; // Valor padrão ou ajuste conforme necessário
    }

    return portNumber;
  }

  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}
