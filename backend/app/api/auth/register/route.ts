import { NextResponse } from "next/server";
import prisma  from "shared/prisma/prisma";
import { hashPassword } from "shared/auth/hash";
import { Role } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists.",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: Role.AGENT,
      },
    });

    return NextResponse.json(
      {
        success: true,
        user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Registration failed.",
      },
      {
        status: 500,
      }
    );
  }
}