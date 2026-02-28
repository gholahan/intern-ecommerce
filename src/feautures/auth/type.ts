export interface AuthRes {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  image: string;
  accessToken: string;
  refreshToken : string;
}
