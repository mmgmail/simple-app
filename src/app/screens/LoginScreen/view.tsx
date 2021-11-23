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
      <div className="login-screen__form">
        <div className="login-screen__form_title">LOGIN</div>
        <div className="login-screen__form_inner">
          <form onSubmit={onSubmit}>
            <div className="login-screen__form_row">
              <InputField
                name="email"
                type="email"
                label={'Email Address'}
                value={data.email}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="login-screen__form_row">
              <InputField
                name="password"
                type="password"
                label={'Password'}
                value={data.password}
                onChange={onInputChange}
                required
              />
            </div>
            <button className="login-screen__form_submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContainerView;