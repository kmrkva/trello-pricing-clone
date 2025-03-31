"use client"

import { useState } from "react"
import Image from "next/image"

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("business")

  // Inline styles as backup
  const containerStyle = {
    minHeight: 'calc(100vh - 48px)',
    display: 'flex',
    flexDirection: 'column' as 'column',
  }

  const buttonStyle = {
    backgroundColor: '#5AAC44',
    color: 'white',
    padding: '12px 0',
    borderRadius: '4px',
    fontWeight: 500,
    width: '100%',
    maxWidth: '28rem',
    marginBottom: '1rem',
  }

  const planCardStyle = (isSelected: boolean) => ({
    border: `2px solid ${isSelected ? '#0079BF' : '#DFE1E6'}`,
    backgroundColor: isSelected ? '#E4F0F6' : 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column' as 'column',
  })

  return (
    <div className="flex min-h-screen flex-col items-center bg-white" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4 pt-12 md:pt-16" style={containerStyle}>
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
          <h1 className="text-center text-3xl font-bold text-slate-800" style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#172B4D' }}>
            Try Business Class for 30 days
          </h1>
        </div>

        <p className="mb-10 max-w-3xl text-center text-slate-600" style={{ color: '#5E6C84', marginBottom: '2.5rem', textAlign: 'center', maxWidth: '48rem' }}>
          Trello Business Class is built for teams who get things done. For 30 days, your team can use all of Trello&apos;s Business Class features for free.
        </p>

        <div className="mb-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%', marginBottom: '2rem' }}>
          {/* Standard Team Plan */}
          <div 
            className={`flex cursor-pointer flex-col rounded-lg border-2 p-6 transition-all ${
              selectedPlan === "standard" 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 bg-white hover:border-blue-300"
            }`}
            style={planCardStyle(selectedPlan === "standard")}
            onClick={() => setSelectedPlan("standard")}
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-800" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#172B4D' }}>Standard Team</h2>
            </div>
            
            <div className="flex flex-1 flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
            style={planCardStyle(selectedPlan === "business")}
            onClick={() => setSelectedPlan("business")}
          >
            <div className="mb-4 flex flex-col" style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
              <div className="mb-2 w-fit rounded-md bg-yellow-400 px-2 py-0.5 text-xs font-semibold text-yellow-800" 
                style={{ backgroundColor: '#F5DD29', color: '#6B5900', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem', width: 'fit-content' }}>
                Exclusive offer!
              </div>
              <h2 className="text-xl font-bold text-slate-800" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#172B4D' }}>Business Class Team</h2>
              <p className="text-sm text-slate-600" style={{ fontSize: '0.875rem', color: '#5E6C84' }}>EVERYTHING IN STANDARD, PLUS</p>
            </div>
            
            <div className="flex flex-1 flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
        <div className="mt-auto flex w-full flex-col items-center" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <button 
            className="mb-4 w-full max-w-md rounded-md bg-green-500 py-3 text-center font-medium text-white transition-colors hover:bg-green-600"
            style={buttonStyle}
          >
            Start 30-day free trial
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', color: '#5E6C84' }}>
            <div>TRUSTED BY TEAMS AT</div>
            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CompanyLogo name="Pinterest" />
              <CompanyLogo name="Google" />
              <CompanyLogo name="Fortnite" />
              <CompanyLogo name="Peloton" />
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-slate-600" style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', color: '#5E6C84' }}>
            After the trial ends, keep Business Class for only $9.99 per user per month when billed annually.{" "}
            <a href="#" className="text-blue-600 hover:underline" style={{ color: '#0079BF' }}>
              You&apos;ll always have the option to downgrade to free.
            </a>
          </div>
        </div>
      </div>
      
      {/* This button will always be below the fold (below 100vh) */}
      <div className="w-full bg-gray-100 py-4 text-center" style={{ width: '100%', backgroundColor: '#F4F5F7', padding: '1rem 0', textAlign: 'center' }}>
        <button className="text-slate-600 hover:text-slate-800 hover:underline" style={{ color: '#5E6C84' }}>
          Start without Business Class
        </button>
      </div>
    </div>
  )
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span className="text-lg" style={{ fontSize: '1.125rem' }}>{icon}</span>
      <span className="text-slate-700" style={{ color: '#3D4B66' }}>{text}</span>
    </div>
  )
}

function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="h-6 w-20 rounded bg-gray-200 text-center text-xs text-gray-500 leading-6" 
      style={{ height: '1.5rem', width: '5rem', borderRadius: '0.25rem', backgroundColor: '#DFE1E6', textAlign: 'center', fontSize: '0.75rem', color: '#6B778C', lineHeight: '1.5rem' }}>
      {name}
    </div>
  )
}