import { Column, Table2, Cell } from '@blueprintjs/table';
import { useSelector} from "react-redux";
export const Table = ({ ...props }) => {
    const currentValue = useSelector(state => state.currentValue);
    const data = useSelector(state => state.data);
    const filteredData = data.filter(e => String(e).includes(currentValue.trim()))
    const cellRenderer = rowIndex => <Cell>{filteredData[rowIndex]}</Cell>;
    return (
        <Table2 numRows={filteredData.length} {...props}>
            <Column name="data" cellRenderer={cellRenderer} />
        </Table2>
    );
};
