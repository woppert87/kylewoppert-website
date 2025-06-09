import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function KyleWoppertRealEstate() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Kyle Woppert - SRQ International Realty</h1>
        <p className="text-lg text-gray-600">
          Specializing in Multi-Unit Investment Properties & First-Time Homebuyer Dreams
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Welcome</h2>
          <p>
            As a Sarasota native and experienced realtor with SRQ International Realty, I
            specialize in helping clients find profitable multi-unit investment properties
            and guiding first-time homebuyers to their dream homes in Sarasota and Manatee
            County. With a passion for real estate and a personal touch, I’m here to make
            your journey smooth and successful.
          </p>
        </div>
        <div className="aspect-square bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center">
          <span className="text-gray-500">[Insert Headshot Here]</span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Properties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl">Downtown Sarasota Triplex</h3>
              <p className="text-gray-600">Great ROI, fully occupied, walk to Bayfront.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl">Bradenton Duplex</h3>
              <p className="text-gray-600">Perfect for new investors, strong rental history.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl">Starter Home in Lakewood Ranch</h3>
              <p className="text-gray-600">3BR/2BA, family-friendly community, move-in ready.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sales History</h2>
        <p>
          Since entering real estate, I've proudly closed numerous transactions across Sarasota
          and Manatee counties. Highlights include the sale of a 6-unit income property in
          Gulf Gate, multiple first-time homebuyer successes in Palmetto and Parrish, and
          helping investors acquire off-market duplexes in Bradenton. My mission is to
          maximize your investment or find the perfect place to call home.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center">
            <span className="text-gray-500">[Photo 1]</span>
          </div>
          <div className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center">
            <span className="text-gray-500">[Photo 2]</span>
          </div>
          <div className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center">
            <span className="text-gray-500">[Photo 3]</span>
          </div>
          <div className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center">
            <span className="text-gray-500">[Photo 4]</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Kyle</h2>
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-gray-700">
            <Phone className="w-5 h-5" /> 941-254-3288
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <Mail className="w-5 h-5" /> KyleWoppert@gmail.com
          </p>
        </div>
        <Button className="mt-2">Send a Message</Button>
      </section>
    </div>
  );
}
