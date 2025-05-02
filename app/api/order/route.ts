// import { NextResponse } from "next/server";
// import { db } from "@/db"; // your drizzle instance
// import { orders } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, phone, address, city, state, pincode } = body;

//     if (!name || !phone || !address || !city || !state || !pincode) {
//       return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//     }

//     const result = await db.insert(orders).values({
//       name,
//       phone,
//       address,
//       city,
//       state,
//       pincode,
//       createdAt: new Date().toISOString(),
//     });

//     return NextResponse.json({ message: "Order placed successfully", result });
//   } catch (error) {
//     console.error("Order creation error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
