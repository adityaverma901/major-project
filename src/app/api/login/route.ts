import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Jwt } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';



const prisma = new PrismaClient();
const JWT_SECRET : any = process.env.JWT_SECRET ;

export async function POST(request :any) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    
    const user:any = await prisma.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Remove sensitive data from the user object
    const { password: _, ...safeUser } = user;

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email ,username:user.name },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return NextResponse.json(
      {
        message: 'Login successful',
        user: safeUser,
        token: token
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'Welcome to the login API. Please use POST to login.',
    },
    { status: 200 }
  );
}