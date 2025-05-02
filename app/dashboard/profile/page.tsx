// app/dashboard/profile/page.tsx

"use client"; // Mark this file as a client component

import { useEffect, useState } from "react";

// Define the type of user data
interface UserData {
  name: string;
  email: string;
  phoneNumber: string;
  // Add other fields if necessary
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch("/api/profile"); // Fetch user profile data from the API route
      const data = await res.json();
      if (data.data) {
        setUserData(data.data);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div className="profile-page">
      {userData ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phoneNumber}</p>
          {/* Add other details as needed */}
        </div>
      ) : (
        <p>Loading...</p> // Display loading message while fetching data
      )}
    </div>
  );
}
