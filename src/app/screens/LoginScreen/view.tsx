import { InputField } from 'app/components';
import './style.scss';

type Props = {
  data: any;
  onSubmit: any,
  onInputChange: (event: any) => void;
};

const ContainerView = ({
  data,
  onSubmit,
  onInputChange
}: Props) => {
  return (
    <div className="login-screen">
      <form onSubmit={onSubmit}>
        <InputField
          name="email"
          type="email"
          label={'Email Address'}
          value={data.email}
          onChange={onInputChange}
          required
        />
        {/* <label>
          Email Address
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={onInputChange}
            required
          />
        </label> */}
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={onInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContainerView;