import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { handleOptionsRequest, setCorsHeaders } from "../cors";

// Handling OPTIONS (for preflight requests)
export async function OPTIONS() {
  return handleOptionsRequest();
}

// GET Method
export async function GET(req: Request) {
  try {
    const apartments = await prisma.apartment.findMany({
      include: {
        host: true,
        wishlistedBy: true,
        bookings: true,
        reviews: true,
        bookedDates: true,
      },
    });

    const res = NextResponse.json(apartments, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        { error: "Failed to fetch apartments" },
        { status: 500 }
      )
    );
  }
}

// POST Method
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      type,
      title,
      location,
      pricePerNight,
      description,
      coverImage,
      images,
      features,
      rules,
      avgRating,
      rentalCount,
      hostId,
    } = body;

    if (
      !type ||
      !title ||
      !location ||
      pricePerNight === undefined ||
      !description ||
      !coverImage ||
      !hostId ||
      !Array.isArray(images) ||
      !Array.isArray(features) ||
      !Array.isArray(rules) ||
      avgRating === undefined ||
      rentalCount === undefined
    ) {
      return setCorsHeaders(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const newApartment = await prisma.apartment.create({
      data: {
        title,
        type,
        location,
        pricePerNight,
        description,
        coverImage,
        images,
        hostId,
        features,
        rules,
        avgRating,
        rentalCount,
      },
      include: {
        host: true,
        wishlistedBy: true,
        bookings: true,
        reviews: true,
        bookedDates: true,
      },
    });

    const res = NextResponse.json(newApartment, { status: 201 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        { error: "Failed to create apartment" },
        { status: 500 }
      )
    );
  }
}
