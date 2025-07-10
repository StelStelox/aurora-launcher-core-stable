import { BinaryLike } from "crypto";
export declare class HashHelper {
    static getHash(str: BinaryLike, type: string): string;
    static getHashFromFile(path: string, type: string): Promise<string>;
}
//# sourceMappingURL=HashHelper.d.ts.map