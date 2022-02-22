export const SearchInput = ({ ref, onInput, onKeyUp, ...props }) => (
    <input
        className="bp3-input"
        placeholder="Text input"
        type="text"
        dir="auto"
        ref={ref}
        onInput={onInput}
        onKeyUp={onKeyUp}
        {...props}
    />
);
