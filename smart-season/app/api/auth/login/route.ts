import { NextResponse } from "next/server";
import prisma  from "@/lib/prisma";
import { comparePassword } from "@/lib/auth/hash";
import { generateToken } from "@/lib/auth/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials.",
        },
        {
          status: 401,
        }
      );
    }

    const validPassword = await comparePassword(
      password,
      user.password
    );

    if (!validPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials.",
        },
        {
          status: 401,
        }
      );
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return NextResponse.json({
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Login failed.",
      },
      {
        status: 500,
      }
    );
  }
}