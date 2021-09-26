import GoogleLogin from 'react-google-login';
import GoogleImage from '../../Assets/Images/Google__G__Logo.svg.png';

const myCustomStyle = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: 'none',
  backgroundImage: `url(${GoogleImage})`,
  backgroundSize: 'cover',
  cursor: 'pointer'
};

const GoogleOAuth = ({ onClickHandler }) => {
  const onLoginGoogle = res => {
    console.log(res);
    onClickHandler && onClickHandler();
  };

  return (
    <GoogleLogin
      clientId={process.env.CLIENT_ID}
      onSuccess={onLoginGoogle}
      onFailure={console.log}
      cookiePolicy={'single_host_origin'}
      render={renderProps => <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={myCustomStyle}></button>}
    />
  );
};

export default GoogleOAuth;
