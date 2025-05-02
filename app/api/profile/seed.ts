import { db } from "@/db";
import { responses } from "@/db/schema";

export async function seed() {
    const users = [
        {
            name: "John Doe",
            email: "john@example.com",
            phoneNumber: "1234567890",
            dateOfBirth: "1990-01-01",
            password: "password123",
        },
        // Add more sample users here if needed
    ];

    for (const user of users) {
        await db.insert(responses).values(user);
    }
    console.log("Seeding complete");
}

seed().catch((error) => console.error("Error seeding database", error));

