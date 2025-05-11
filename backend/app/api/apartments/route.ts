import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const apartment = await prisma.apartment.findUnique({
        where: { id },
        include: { entrepreneur: true, wishlistedBy: true },
      });

      if (!apartment) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(apartment, { status: 200 });
    }

    const apartments = await prisma.apartment.findMany({
      include: { entrepreneur: true, wishlistedBy: true },
    });

    return NextResponse.json(apartments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch apartment(s)" },
      { status: 500 }
    );
  }
}

// POST
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
      bookedDates,
      avgRating,
      rentalCount,
      reviews,
      bookings,
      wishlistedBy,
      entrepreneurId,
    } = body;

    if (
      !type ||
      !title ||
      !location ||
      !pricePerNight ||
      !description ||
      !coverImage ||
      !images ||
      !features ||
      !rules ||
      !bookedDates ||
      !avgRating ||
      !rentalCount ||
      !reviews ||
      !bookings ||
      !wishlistedBy ||
      !entrepreneurId
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newApartment = await prisma.apartment.create({
      data: {
        type,
        title,
        location,
        pricePerNight,
        description,
        coverImage,
        images,
        features,
        rules,
        bookedDates,
        avgRating,
        rentalCount,
        reviews,
        bookings,
        wishlistedBy,
        entrepreneurId,
      },
    });

    return NextResponse.json(newApartment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create apartment" },
      { status: 500 }
    );
  }
}
