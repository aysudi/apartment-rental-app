import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Function to manually set CORS headers
const setCorsHeaders = (res: NextResponse) => {
  res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return res;
};

// GET
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const apartment = await prisma.apartment.findUnique({
        where: { id },
        include: { entrepreneur: true, wishlistedBy: true },
      });

      if (!apartment) {
        return setCorsHeaders(
          NextResponse.json({ error: "Apartment not found" }, { status: 404 })
        );
      }

      return setCorsHeaders(NextResponse.json(apartment, { status: 200 }));
    }

    const apartments = await prisma.apartment.findMany({
      include: { entrepreneur: true, wishlistedBy: true },
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
      return setCorsHeaders(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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

// Handling OPTIONS (for preflight requests)
export async function OPTIONS(req: Request) {
  const res = NextResponse.json({});
  return setCorsHeaders(res); // Ensure CORS headers are set for OPTIONS
}
