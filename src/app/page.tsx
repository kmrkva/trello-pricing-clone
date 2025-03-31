"use client"

import { useState } from "react"
import Image from "next/image"

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("business")

  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4 pt-12 md:pt-16">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Trello Business Class"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-center text-3xl font-bold text-slate-800">
            Try Business Class for 30 days
          </h1>
        </div>

        <p className="mb-10 max-w-3xl text-center text-slate-600">
          Trello Business Class is built for teams who get things done. For 30 days, your team can use all of Trello&apos;s Business Class features for free.
        </p>

        <div className="mb-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Standard Team Plan */}
          <div 
            className={`flex cursor-pointer flex-col rounded-lg border-2 p-6 transition-all ${
              selectedPlan === "standard" 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 bg-white hover:border-blue-300"
            }`}
            onClick={() => setSelectedPlan("standard")}
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-800">Standard Team</h2>
            </div>
            
            <div className="flex flex-1 flex-col gap-4">
              <FeatureItem icon="📋" text="Unlimited team Boards" />
              <FeatureItem icon="⚡" text="3 Power-Ups per board" />
              <FeatureItem icon="🔄" text="More automations" />
              <FeatureItem icon="🎨" text="Custom backgrounds" />
              <FeatureItem icon="🏷️" text="Custom stickers" />
              <FeatureItem icon="🔍" text="Saved searches" />
            </div>
          </div>

          {/* Business Class Team Plan */}
          <div 
            className={`flex cursor-pointer flex-col rounded-lg border-2 p-6 transition-all ${
              selectedPlan === "business" 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 bg-white hover:border-blue-300"
            }`}
            onClick={() => setSelectedPlan("business")}
          >
            <div className="mb-4 flex flex-col">
              <div className="mb-2 w-fit rounded-md bg-yellow-400 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                Exclusive offer!
              </div>
              <h2 className="text-xl font-bold text-slate-800">Business Class Team</h2>
              <p className="text-sm text-slate-600">EVERYTHING IN STANDARD, PLUS</p>
            </div>
            
            <div className="flex flex-1 flex-col gap-4">
              <FeatureItem icon="⚡" text="Unlimited Power-Ups" />
              <FeatureItem icon="🔄" text="Enhanced automations" />
              <FeatureItem icon="📊" text="Table" />
              <FeatureItem icon="📅" text="Calendar" />
              <FeatureItem icon="🗺️" text="Map" />
              <FeatureItem icon="✓" text="Advanced checklists" />
              <FeatureItem icon="📋" text="Team board templates" />
              <FeatureItem icon="👁️" text="Observers" />
              <FeatureItem icon="🔒" text="Admin & security features" />
              <FeatureItem icon="⭐" text="Priority support" />
            </div>
          </div>
        </div>

        {/* This container ensures the button is positioned at exactly 100vh */}
        <div className="mt-auto flex w-full flex-col items-center">
          <button className="mb-4 w-full max-w-md rounded-md bg-green-500 py-3 text-center font-medium text-white transition-colors hover:bg-green-600">
            Start 30-day free trial
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <div>TRUSTED BY TEAMS AT</div>
            <div className="flex items-center gap-4">
              <CompanyLogo name="Pinterest" />
              <CompanyLogo name="Google" />
              <CompanyLogo name="Fortnite" />
              <CompanyLogo name="Peloton" />
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-slate-600">
            After the trial ends, keep Business Class for only $9.99 per user per month when billed annually.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              You&apos;ll always have the option to downgrade to free.
            </a>
          </div>
        </div>
      </div>
      
      {/* This button will always be below the fold (below 100vh) */}
      <div className="w-full bg-gray-100 py-4 text-center">
        <button className="text-slate-600 hover:text-slate-800 hover:underline">
          Start without Business Class
        </button>
      </div>
    </div>
  )
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg">{icon}</span>
      <span className="text-slate-700">{text}</span>
    </div>
  )
}

function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="h-6 w-20 rounded bg-gray-200 text-center text-xs text-gray-500 leading-6">
      {name}
    </div>
  )
}