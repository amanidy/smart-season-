import { NextResponse } from "next/server";
import  prisma  from "shared/prisma/prisma";

export async function GET() {
  try {
    const userCount = await prisma.user.count();
    const fieldCount = await prisma.field.count();
    const updateCount = await prisma.fieldUpdate.count();

    return NextResponse.json({
      success: true,
      message: "Database connection successful.",
      data: {
        users: userCount,
        fields: fieldCount,
        updates: updateCount,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed.",
      },
      {
        status: 500,
      }
    );
  }
}