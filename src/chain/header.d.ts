// Copyright (c) 2016-2021 Knuth Project developers.
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

import { Result } from '../result'; 

export declare class Header { 
  constructor(version: number, previousBlockHash: Uint8Array, merkle: Uint8Array, timestamp: number , bits: number, nonce: number); 

  toNative(): any;

  get hash(): Uint8Array; 

  rawData(version: number): Uint8Array; 
}

export declare function fromNative(native: any, destroy: boolean): Header; 

export declare function fromData(version: number, data: Uint8Array): Result; 

export declare function toData(obj: any, version: number): Uint8Array; 

export declare function hash(obj: any): Uint8Array; 

export declare function destruct(native: any): void; 


// TODO (Nicolás): Check with Fernando all 'any' types 

