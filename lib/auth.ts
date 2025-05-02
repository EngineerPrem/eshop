import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'my-secret';

export async function getUserFromToken() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  if (!token) return null;

  try {
    const user = jwt.verify(token, JWT_SECRET) as { id: number; name: string; username: string };
    return user;
  } catch (error) {
    return null;
  }
}
