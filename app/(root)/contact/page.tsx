import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <ContactHero />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Ready to connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {`We're here to help bring your ideas to life. Reach out and let's
                start a conversation.`}
            </p>
          </div>

          <div className="space-y-8">
            {/* First Row: Email and Call */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <GlowingEffect disabled={false} className="rounded-xl" />
                <Card className="border-border shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">Email Us</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Send us a message anytime
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <Link href={"mailto:Info@thegreatlogic.com"}>
                        <p className="text-muted-foreground hover:text-primary transition-colors">
                          Info@thegreatlogic.com
                        </p>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <GlowingEffect disabled={false} className="rounded-xl" />
                <Card className="border-border shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">Call Us</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Speak with our team directly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <p className="text-muted-foreground font-medium">
                        +91 82902 27562
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Second Row: Visit Us */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <GlowingEffect disabled={false} className="rounded-xl" />
                <Card className="border-border shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">Visit Us</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Find us at our locations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="text-md text-muted-foreground">
                          Jaipur: A1, A2 SS Bhandari Nagar, Swej Farm, Sodala,
                          Jaipur, Rajasthan 302019
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="text-md text-muted-foreground">
                          Mumbai: 604, A wing, Trade Square Mehra Compound,
                          Andheri - Kurla Rd, Safed Pul, Saki Naka, Andheri
                          East, Mumbai, Maharashtra 400072
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="text-md text-muted-foreground">
                          Dubai: D Wings 4th floor - DSO Headquarters Dubai
                          Silicon Oasis - Dubai - United Arab Emirates
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="text-md text-muted-foreground">
                          Canada: 6705 Tomken Road Unit 219 Box 244 Mississauga,
                          ON L5T 2J6
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="text-md text-muted-foreground">
                          Australia: 320 Victoria Parade, East Melbourne VIC
                          3002
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 py-16 max-w-5xl mx-auto text-center">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
