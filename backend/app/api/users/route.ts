import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const user = await prisma.user.findUnique({
        where: { id },
        include: {
          apartments: true,
          wishlist: true,
          bookings: true,
          reviews: true,
        },
      });

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json(user, { status: 200 });
    }

    const users = await prisma.user.findMany({
      include: {
        apartments: true,
        wishlist: true,
        bookings: true,
        reviews: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user(s)" },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password, profileImage, role } = body;

    if (!username || !email || !password || !profileImage || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        profileImage,
        role,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
