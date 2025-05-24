import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { handleOptionsRequest, setCorsHeaders } from "@/app/api/cors";

// Preflight CORS
export async function OPTIONS() {
  return handleOptionsRequest();
}

// GET /api/users (all users)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    if (email) {
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          apartments: true,
          bookings: true,
          reviews: true,
          wishlist: true,
        },
      });

      if (!user) {
        return setCorsHeaders(
          NextResponse.json({ error: "User not found" }, { status: 404 })
        );
      }

      return setCorsHeaders(NextResponse.json(user));
    }

    // Fallback: get all users
    const users = await prisma.user.findMany({
      include: {
        apartments: true,
        bookings: true,
        reviews: true,
        wishlist: true,
      },
    });
    return setCorsHeaders(NextResponse.json(users));
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        {
          error: "Failed to fetch user(s)",
          details: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 500 }
      )
    );
  }
}

// POST /api/users
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      profileImage,
      role,
    } = body;

    if (!username || !email || !password || !profileImage || !role) {
      const res = NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
      return setCorsHeaders(res);
    }

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password,
        profileImage,
        role,
      },
    });

    const res = NextResponse.json(newUser, { status: 201 });
    return setCorsHeaders(res);
  } catch (error) {
    const res = NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
    return setCorsHeaders(res);
  }
}
