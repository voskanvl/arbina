import { Column, Table2, Cell } from '@blueprintjs/table';
export const Table = ({ Rows, ...props }) => {
    const cellRenderer = rowIndex => <Cell>{Rows[rowIndex]}</Cell>;
    return (
        <Table2 numRows={Rows.length} {...props}>
            <Column name="data" cellRenderer={cellRenderer} />
        </Table2>
    );
};
