// app/api/profile/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db"; // Adjust the path to your DB connection
import { responses } from "@/db/schema"; // Adjust the path to your schema
import { eq } from "drizzle-orm"; // Import eq from drizzle-orm

export async function GET(request: Request) {
  // Example email, ideally you'd get this from the authenticated user
  const email = "user@example.com"; // Replace with dynamic email input from the session or query
  
  // Query the database to fetch user data by email
  const user = await db
    .select()
    .from(responses)
    .where(eq(responses.email, email)) // Use eq to compare the email column with the provided email
    .limit(1); // Fetch only one result (first matching row)

  if (user.length > 0) {
    // Successfully found user
    const userData = user[0]; // Access the first row
    return NextResponse.json({
      message: "User data fetched successfully",
      data: {
        name: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        // Add any other fields you need to display
      },
    });
  } else {
    return NextResponse.json({
      message: "User not found",
    });
  }
}
