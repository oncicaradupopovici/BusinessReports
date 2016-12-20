export interface IModel {
    id: number;
}

export class PagedResult<T> {

    constructor(
        public data: T[],
        public pageInfo: PageInfo
    ) {

    }
}

export class PageInfo {
    constructor(
        public page?: number,
        public pageSize?: number,
        public totalCount?: number,
        public totalPages?: number
    ) {

    }
}

export class SelectListItem {
    public id: number;
    public name: string;
}

export class ApiError {

    public message: string;
    public details?: string;
    public status?: number;
    public statusText?: string;
    public validations?: { [key: string]: string[]; };

    public isValidationError(): boolean {
        return this.validations != null;
    }

    public getFriendlyStatus(): string {
        return this.status ? `${this.status} - ${this.statusText}` : 'Api unavailable';
    }

    public getFriendlyMessage(): string {
        return this.message || 'Unknown error';
    }

    public getFriendlyValidation(): string {
        let validationMsg = '';
        for (var key in this.validations) {
            validationMsg += this.validations[key] + '<br/>';
            // Use `key` and `value`
        }

        return validationMsg;
    }
}

