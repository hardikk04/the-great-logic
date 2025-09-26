import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import Wrapper from "@/components/shared/Wrapper";
import ContactHero from "@/components/contact/ContactHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <div className="absolute top-0 inset-0 z-10 overflow-hidden">
        <Wrapper />
      </div>
      <ContactHero />

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Ready to connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {`We're here to help bring your ideas to life. Reach out and let's
                start a conversation.`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Email Us</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Send us a message anytime
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  hello@greatlogic.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Call Us</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Speak with our team directly
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">+91 82902 27562</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Visit Us</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Come see us in person
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Jaipur, Rajisthan</p>
              </CardContent>
            </Card>
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
