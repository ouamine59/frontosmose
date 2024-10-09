// import { Route, Navigate, Outlet } from 'react-router-dom';
// import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

// interface PrivateRouteProps {
//   allowedRole: string;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRole }) => {
//   const auth = useAuthUser();
//   return auth && auth.role === allowedRole ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;
