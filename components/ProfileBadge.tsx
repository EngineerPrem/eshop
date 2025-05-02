'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type ProfileBadgeProps = {
  email: string;
};

export default function ProfileBadge({ email }: ProfileBadgeProps) {
  const { data: session, status } = useSession();
    // Extract only letters and take first 2
    const initials = (email.match(/[a-zA-Z]/g) || []).slice(0, 2).join('').toUpperCase()
    if (status === "loading") return null;
  return (
    <Link href="/dashboard/profile">
      <div className="cursor-pointer flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white rounded-full font-semibold shadow-sm">
        <span className="text-sm">{initials || 'US'}</span>

        {session?.user ? (
        <p>{JSON.stringify(session.user)}</p> 
      ) : (
        <p>Not signed in</p>
      )}
      
      </div>
    </Link>
  );
}
