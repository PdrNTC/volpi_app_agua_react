function InputRadio({ name, value, checked, onChange }) {
    return (
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
        />
    );
}

export default InputRadio;