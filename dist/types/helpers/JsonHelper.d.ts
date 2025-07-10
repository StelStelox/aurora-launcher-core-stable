export type JsonData = Record<string, any> | any[];
/**
 * Класс хелпер для работы с JSON
 */
export declare class JsonHelper {
    /**
     * Преобразовать JSON строку в объект / массив
     * @param string JSON строка
     * @returns `Object | Array`
     */
    static fromJson<T>(string: string): T;
    /**
     * Преобразовать объект / массив в JSON строку
     * @param object Пробразуемый объект / массив
     * @param pretty Форматировать вывод отступами или вывести в одну строку (по умолчанию `false`)
     * @returns JSON сторка
     */
    static toJson(object: JsonData, pretty?: boolean): string;
}
//# sourceMappingURL=JsonHelper.d.ts.map