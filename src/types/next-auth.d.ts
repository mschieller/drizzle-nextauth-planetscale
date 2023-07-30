import type { Session, User } from "next-auth"; // eslint-disable-line
import type { JWT } from "next-auth/jwt"; // eslint-disable-line

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      name: string;
      email: string;
    };
  }
}
