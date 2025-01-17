"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedResult = exports.getPagination = void 0;
const getPagination = (rawPage, rawPerPage) => {
    const page = Number(rawPage || 1);
    const perPage = Number(rawPerPage || 10);
    const skip = page > 0 ? perPage * (page - 1) : 0;
    return {
        perPage,
        page,
        skip,
    };
};
exports.getPagination = getPagination;
const getPaginatedResult = ({ data, pagination, count, }) => {
    const { page = 1, perPage = 10 } = pagination;
    const total = Number(count || 0);
    const lastPage = Math.ceil(total / perPage);
    return {
        data,
        meta: {
            total,
            lastPage,
            currentPage: page,
            perPage,
            prev: page > 1 ? page - 1 : null,
            next: page < lastPage ? page + 1 : null,
        },
    };
};
exports.getPaginatedResult = getPaginatedResult;
//# sourceMappingURL=get-paginated-result.js.map