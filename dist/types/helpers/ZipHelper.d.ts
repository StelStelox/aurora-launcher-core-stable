export declare class ZipHelper {
    /**
     * Распаковка архива в папку
     * @param archive - путь до архива
     * @param destDir - конечная папка
     * @param whitelist - распаковать файлы с определённым расширением (указывать с точкой, например: .so)
     * @param onProgress - функция для отслеживания прогресса распаковки
     * @returns список распакованных файлов
     */
    static unzip(archive: string, destDir: string, whitelist?: string[], onProgress?: (size: number) => void): {
        path: string;
        sha1: string;
    }[];
}
//# sourceMappingURL=ZipHelper.d.ts.map