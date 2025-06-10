import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Message sent!");
  };

  return (
    <div className="p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Kyle Woppert</h1>
        <p className="text-lg">SRQ International Realty - Sarasota, FL</p>
        <img src="/headshot.png" alt="Kyle Woppert" className="mx-auto rounded-full w-48 h-48 mt-4" />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Multi-Unit Investment Properties</h2>
            <p>Explore income-producing properties perfect for investors in Sarasota and Manatee County.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">First-Time Homebuyer Opportunities</h2>
            <p>Discover affordable dream homes tailored to first-time buyers and families.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Browse Active Listings</h2>
        <iframe
          src="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx?idx=593e6f28"
          width="100%"
          height="600px"
          frameBorder="0"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Photo Gallery</h2>
        <p>Coming soon – upload featured property photos.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Kyle</h2>
        <p>
          Kyle Woppert is a Sarasota-based realtor with SRQ International Realty. Specializing in investment
          properties and helping families find their first home, Kyle is known for fast closings, cash deals,
          and expert tenant handling. Licensed in Florida, Kyle has publicly sold properties in Sarasota and
          Manatee counties and is committed to guiding his clients every step of the way.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Kyle</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            rows="4"
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
        <div className="mt-4 text-center">
          <p>📞 <strong>941-254-3288</strong></p>
          <p>📧 <strong>KyleWoppert@gmail.com</strong></p>
        </div>
      </section>
    </div>
  );
}
