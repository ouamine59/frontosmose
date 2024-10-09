import useSignIn from 'react-auth-kit/hooks/useSignIn'
import {useNavigate} from 'react-router-dom'
const LoginPage: React.FC = () => {
  const signIn = useSignIn();
  

  const handleLogin = () => {
    
    signIn({
        auth: {
            token: '<jwt token>',
        },userState: {
            name: 'React User', 
            uid: 123456,
            role:"admin"
        },
        refresh: '<refresh jwt token>'
    })
  };

  return (
    <div>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
};

export default LoginPage;
