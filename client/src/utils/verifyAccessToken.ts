import jwt_decode from "jwt-decode";
import { User } from "models";

function VerifyAccessToken(accessToken: string | null): boolean {
  if (accessToken) {
    const data: User = jwt_decode(accessToken);
    const expired = data.exp;
    const now = Date.now();
    if (expired) {
      if (expired * 1000 - now < 0) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}

export default VerifyAccessToken;
