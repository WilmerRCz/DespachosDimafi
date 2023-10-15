import { DecodedToken } from '../interface/DecodedToken'
import { useAuthStore } from '../store/auth'
import jwt_decode from 'jwt-decode';

export const verifyRoleInComponent = (roles: number[]) => {
  const token = useAuthStore((state) => state.token);
  const { privilegio }: DecodedToken = jwt_decode(token);

  if (roles.includes(privilegio)) {
    return false
  }

  return true
}