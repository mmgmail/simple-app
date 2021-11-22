import React from 'react';

import './style.scss';

type Props = {
  data: any;
  onSubmit: any;
  onInputChange: any;
};

const ContainerView = ({
  data,
  onSubmit,
  onInputChange
}: Props) => {
  return (
    <div className="login-screen">
      <form onSubmit={onSubmit}>
        <label>
          Email Address
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={onInputChange}
            required
          />
        </label>
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