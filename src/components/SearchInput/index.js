export const SearchInput = ({ onInput, onKeyUp, ...props }) => (
    <input
        className="bp3-input"
        placeholder="Text input"
        type="text"
        dir="auto"
        onInput={onInput}
        onKeyUp={onKeyUp}
        {...props}
    />
);
