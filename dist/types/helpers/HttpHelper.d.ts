import { URL } from "url";
import { JsonData } from ".";
interface Progress {
    url: string | URL;
    transferred: number;
    total: number;
}
type onProgressFunction = (progress: Progress) => void;
export interface File {
    sourceUrl: string;
    destinationPath: string;
    sha1?: string;
}
export declare class HttpHelper {
    private static concurrency;
    /**
     * Изменить количество одновременно скачиваемых файлов
     * @param concurrency
     */
    static setConcurrency(concurrency: number): void;
    /**
     * Проверка наличия ресурса
     * @param url - строка или объект URL, содержащий ссылку на ресурс
     * @returns Promise, который вернёт `true`, в случае существования ресурса или `false` при его отсутствии или ошибке
     */
    static existsResource(url: string | URL): Promise<boolean>;
    /**
     * Чтение ресурса
     * @param url - строка или объект URL, содержащий ссылку на ресурс
     * @returns Promise, который вернёт содержимое ресурса, в случае успеха
     */
    static getResource(url: string | URL): Promise<string>;
    /**
     * Получение данных из JSON ресурса
     * @param url - строка или объект URL, содержащий ссылку на ресурс
     * @returns Promise, который вернёт обработанный объект, в случае успеха
     */
    static getResourceFromJson<T>(url: string | URL): Promise<T>;
    /**
     * Отправка POST запроса и получение результата из JSON
     * @param url - строка или объект URL, содержащий ссылку на ресурс
     * @returns Promise, который вернёт обработанный объект, в случае успеха
     */
    static postJson<T>(url: string | URL, json: JsonData): Promise<T>;
    /**
     * Скачивание файла
     * @param url - строка или объект URL, содержащий ссылку на файл
     * @param filePath - путь до сохраняемого файла
     * @param options - список опций:
     * @param options.onProgress - коллбэк, в который передаётся текущий прогресс загрузки, если объявлен
     * @param options.saveToTempFile - сохранять во временный файл, по умолчанию `false`
     * @returns Promise который вернёт название файла в случае успеха
     */
    static downloadFile(url: string | URL, filePath: string | null, options?: {
        onProgress?: onProgressFunction;
        saveToTempFile?: boolean;
    }): Promise<string>;
    /**
     * Скачивание во временный файл с последующим переименованием в оригинал
     * @param url - строка или объект URL, содержащий ссылку на файл
     * @param filePath - путь до сохраняемого файла
     * @param options - список опций:
     * @param options.onProgress - коллбэк, в который передаётся текущий прогресс загрузки, если объявлен
     */
    static downloadSafeFile(url: string | URL, filePath: string, options?: {
        onProgress?: onProgressFunction;
    }): Promise<void>;
    /**
     * Скачивание файлов
     * @param filesList - список файлов
     * @param options - список опций:
     * @param options.onProgress - коллбэк, в который передаётся текущий прогресс загрузки, если объявлен
     * @param options.saveToTempFile - сохранять во временный файл, по умолчанию `false`
     */
    static downloadFiles(filesList: File[], options?: {
        onProgress?: onProgressFunction;
        beforeDownload?: (data: {
            url: string | URL;
        }) => void;
        afterDownload?: (data: {
            url: string | URL;
        }) => void;
    }): Promise<void>;
    /**
     * Внутренняя функция скачивания файла
     * @param url - строка или объект URL, содержащий ссылку на файл
     * @param filePath - путь до сохраняемого файла
     * @param onProgress - коллбэк, в который передаётся текущий прогресс загрузки, если объявлен
     * @returns Promise, который вернёт название файла, в случае успеха
     */
    private static download;
    private static verifyFileHash;
}
export {};
//# sourceMappingURL=HttpHelper.d.ts.map