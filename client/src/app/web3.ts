import { InjectionToken } from '@angular/core';
import Web3 from 'web3';

export const WEB3 = new InjectionToken<Web3>('web3', {
    providedIn: 'root',
    factory: () => {
        try {
            const provider = ('ethereum' in window) ? window['ethereum'] : null;
            if (provider === null) {
                throw new Error('open with chrome and log in to metamask and spell accordion right')
            }
            return new Web3(provider);
        } catch (err) {
            throw new Error('Non-Ethereum browser detected. You should consider trying Mist or MetaMask!');
        }
    }
});
