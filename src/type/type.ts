//export type Result<T> = { ok: true; value: T } | { ok: false; err: string };
export type Result<T, E> = [T, null] | [null, E];

export interface UserFormData {
    birthday: string;
    gender: string;
    age: number;
    job: string;
    relationship: string;
    budgetMin: number;
    budgetMax: number;
}