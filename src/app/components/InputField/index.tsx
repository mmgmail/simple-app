
import './style.scss';

interface Props {
  name: string,
  type: string,
  label: string,
  value: any,
  required: boolean,
  onChange: (event: any) => void;
}

const InputField = ({
  name,
  type,
  label,
  value,
  required,
  onChange
}: Props) => {
  return (
    <label
      className="input-field"
      htmlFor={name}
      dir="rtl"
    >
      <span className="input-field__label">{label}</span>
      <input
        className="input-field__input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  )
}

export default InputField