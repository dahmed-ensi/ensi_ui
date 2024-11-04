// src/middleware/kindeMiddleware.ts
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function kindeMiddleware() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return user;
}