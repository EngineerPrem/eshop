// app/actions/signup.ts

"use server"

import { db } from "@/db"
import { responses } from "@/db/schema"
import { SqliteError } from "better-sqlite3"

export async function SignupUseAction(formData: FormData) {
  try {
    await db.insert(responses).values({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      password: formData.get("password") as string,
    })
    return {
      success: true,
    }
  } catch (err) {
    if (err instanceof SqliteError) {
      return {
        success: false,
        error: err.message,
      }
    }
    return {
      success: false,
      error: "Unknown error",
    }
  }
}
