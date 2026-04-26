import { signToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import ms from "ms"
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 },
      );
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 },
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 },
      );
    }

    const token = signToken({ id: user.id, email: user.email });

    const response = NextResponse.json(
      { message: 'Login realizado com sucesso!' },
      { status: 200 },
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: ms('1d'),
      path: '/',
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Erro interno no servidor.' },
      { status: 500 },
    );
  }
}
