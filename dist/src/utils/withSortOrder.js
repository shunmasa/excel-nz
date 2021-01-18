export const withSortOrder = (columns, { sortField, sortOrder }) => columns.map(column => (Object.assign(Object.assign({}, column), { defaultSort: sortField === column.field ? sortOrder : undefined })));
//web
