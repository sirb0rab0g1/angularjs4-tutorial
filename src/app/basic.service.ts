import { Injectable } from '@angular/core';

import { declarations } from './basic';
import { declation } from './mock-basic';

@Injectable()
export class BasicService {
    BasicService(): Promise<declarations[]> {
        return Promise.resolve(declation);
    }
    
    getHeroesSlowly(): Promise<declarations[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.BasicService()), 2000);
    });
  }
}

