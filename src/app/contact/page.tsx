"use client";

import React, { useState } from "react";
import { OFFICES } from "@/lib/constants";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const ENQUIRY_TYPES = [
  { label: "GENERAL CORPORATE INQUIRY", value: "general" },
  { label: "MINING CONCESSIONS & FLEET MOBILIZATION", value: "mining" },
  { label: "TURNKEY PROCESSING PLANT EPC", value: "plant" },
  { label: "BULK MINERAL COMMODITY TRADING", value: "trading" },
  { label: "HEAVY-HAUL RAILWAY SOLUTIONS", value: "railway" },
];

export default function ContactPage() {
  const [enquiryType, setEnquiryType] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    tonnage: "",
    destinationPort: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-iron-white py-20 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <span className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] block mb-3">
            Tenders, Procurement & Partnerships
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-earth-black leading-[0.95] mb-6">
            Direct Commercial Contact
          </h1>
          <p className="text-body-lg text-quarry-grey max-w-2xl leading-relaxed">
            Reach our engineering project offices and commodity trading centers across Africa and our international treasury hub in Dubai.
          </p>
        </div>
      </section>

      {/* Split Layout: Contact Info Left, Form Right */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Hub Locations (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div>
                <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                  Operating Hubs
                </span>
                <h2 className="text-heading-2 font-medium text-earth-black mb-6">
                  Permanent Regional Offices
                </h2>
              </div>

              <div className="space-y-6">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="bg-iron-white border border-slab-grey p-6 font-mono"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-sans text-heading-3 font-medium text-earth-black">
                        {office.city}
                      </h3>
                      <span className="text-xs text-oxide-red font-bold uppercase">
                        {office.country}
                      </span>
                    </div>

                    <span className="text-[11px] text-quarry-grey block mb-3 uppercase">
                      {office.type}
                    </span>

                    <div className="text-xs space-y-1.5 text-earth-black pt-3 border-t border-slab-grey">
                      <p className="font-sans text-quarry-grey">{office.address}</p>
                      <p className="font-semibold">Tel: {office.phone}</p>
                      <p className="text-oxide-red">{office.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dynamic Multi-Type Enquiry Form (7 Columns) */}
            <div className="lg:col-span-7 bg-iron-white border border-slab-grey p-8 md:p-12">
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                Project Tender Intake
              </span>
              <h2 className="text-heading-1 font-medium text-earth-black mb-8">
                Submit An Operational Inquiry
              </h2>

              {submitted ? (
                <div className="p-8 bg-[#EBE8E0] border-l-4 border-oxide-red font-mono">
                  <h3 className="font-sans text-heading-3 font-medium text-earth-black mb-2">
                    Inquiry Received by Project Engineering Team
                  </h3>
                  <p className="text-body-sm text-quarry-grey leading-relaxed mb-6 font-sans">
                    Your request has been routed to the relevant technical division. A senior project engineer will review specifications and respond within 24 operational hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs py-3 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Enquiry Type Selector */}
                  <Select
                    label="Primary Sector / Inquiry Scope"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    options={ENQUIRY_TYPES}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name / Representative"
                      required
                      placeholder="e.g. Jean-Marc Laurent"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <Input
                      label="Organization / Company / Ministry"
                      required
                      placeholder="e.g. Societe Miniere de Kayes"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Official Corporate Email"
                      type="email"
                      required
                      placeholder="e.g. jml@smk-mining.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                      label="Direct Contact Telephone"
                      required
                      placeholder="+223 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Dynamic Fields for Mineral Trading or Turnkey Plants */}
                  {enquiryType === "trading" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-[#EBE8E0] border border-slab-grey">
                      <Input
                        label="Estimated Target Tonnage (MT)"
                        placeholder="e.g. 50,000 MT / Month"
                        value={formData.tonnage}
                        onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                      />
                      <Input
                        label="Discharge Port / Smelter Hub"
                        placeholder="e.g. CIF Qingdao / Rotterdam"
                        value={formData.destinationPort}
                        onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      />
                    </div>
                  )}

                  {enquiryType === "mining" && (
                    <div className="p-4 bg-[#EBE8E0] border border-slab-grey">
                      <Input
                        label="Concession Location & Mine Type"
                        placeholder="e.g. Kolwezi district, open-pit overburden stripping"
                      />
                    </div>
                  )}

                  <Textarea
                    label="Operational Requirements & Scope of Supply"
                    rows={4}
                    required
                    placeholder="Specify project parameters, required equipment capacities, execution runway, or off-take criteria..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full md:w-auto">
                      Submit Operational Inquiry →
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
