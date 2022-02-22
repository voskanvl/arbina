import { Button } from '@blueprintjs/core';
export const AddButton = ({ onClick, ...props }) => (
    <Button className="bp3-minimal" icon="plus" onClick={onClick} {...props} />
);
