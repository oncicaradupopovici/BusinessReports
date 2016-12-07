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