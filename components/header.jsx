"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { Building, Plus, Ticket } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUser();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 bg-black/90 backdrop-blur-xl z-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="E-Batash-logo"
              width={500}
              height={500}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowUpgradeModal(true)}
            >
              Pricing
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/explore">Explore</Link>
            </Button>

            <Authenticated>
              <Button size="sm" asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Tickets"
                    labelIcon={<Ticket size={16} />}
                    href="/my-tickets"
                  />
                  <UserButton.Link
                    label="My Events"
                    labelIcon={<Building size={16} />}
                    href="/my-events"
                  />
                    <UserButton.Action label="manageAccount"/>
                </UserButton.MenuItems>
              </UserButton>
        
            </Authenticated>

            <Unauthenticated>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm" className="text-black">
                  Sign In
                </Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>

        {/* Loader */}
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width="100%" color="#a855f7" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
