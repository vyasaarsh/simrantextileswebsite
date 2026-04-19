import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DE3163] via-[#DE3163]/90 to-[#FF7F50]/80 pb-20 pt-20 sm:pb-32 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-6xl text-balance">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Let's discuss how we can bring your textile manufacturing vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-2 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 shadow-xl h-full">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold">Office Location</h3>

                  <div className="space-y-4">

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="mb-1 font-semibold">Head Office</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Simran Textiles - 28, 29 & 31,
                          <br />
                          Ghanshyam Industrial Estate,
                          <br />
                          Vasna Iyava, Sanand, Gujarat - 382170
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-secondary/10 p-2">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="mb-1 font-semibold">Phone</div>
                        <p className="text-sm text-muted-foreground">+91 8000839652</p>
                        <p className="text-sm text-muted-foreground">+91 9824256996</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-2">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="mb-1 font-semibold">Email</div>
                        <p className="text-sm text-muted-foreground">
                          info@simrantextiles.com
                        </p>
                      </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-2">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="mb-1 font-semibold">Website</div>
                        <p className="text-sm text-muted-foreground">
                          www.simrantextiles.com
                        </p>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.406681283285!2d72.33988247567582!3d23.00883551684005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e99004b7dfd9f%3A0x772661a1411688d4!2sSIMRAN%20TEXTILE!5e0!3m2!1sen!2sin!4v1776589536817!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}
