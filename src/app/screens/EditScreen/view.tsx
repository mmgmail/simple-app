
import { InputField } from 'app/components';
import './style.scss';

interface Props {
  data: any,
  onInputChange: (event: any) => void;
}

const ContainerView = ({ data, onInputChange }: Props) => {
  return (
    <div className="edit-screen">
      <InputField
        name="first_name"
        type="text"
        label={'First Name'}
        value={data.first_name}
        onChange={onInputChange}
        required
      />
      <InputField
        name="last_name"
        type="text"
        label={'Last Name'}
        value={data.last_name}
        onChange={onInputChange}
        required
      />
      <InputField
        name="email"
        type="email"
        label={'Email'}
        value={data.email}
        onChange={onInputChange}
        required
      />
      <InputField
        name="company_name"
        type="text"
        label={'Company Name'}
        value={data.company_name}
        onChange={onInputChange}
        required
      />
      <InputField
        name="gender"
        type="text"
        label={'Gender'}
        value={data.gender}
        onChange={onInputChange}
        required
      />
      <InputField
        name="city"
        type="text"
        label={'City'}
        value={data.city}
        onChange={onInputChange}
        required
      />
    </div>
  )
}

export default ContainerView;