import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileCheck } from "lucide-react"

export default function CertificationsPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DE3163] via-[#DE3163]/90 to-[#FF7F50]/80 pb-20 pt-20 sm:pb-32 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-xs sm:text-sm">
              Quality Certified
            </Badge>

            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-6xl text-balance">
              Certifications & Quality Assurance
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Maintaining the highest standards through internationally recognized certifications
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex rounded-full bg-primary/10 p-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>

                <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                  Our Commitment to Quality
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Simran Textiles, quality is not just a promise—it's our foundation.
                  We maintain rigorous quality control processes at every stage of
                  production and adhere to internationally recognized compliance
                  standards. Our certifications demonstrate our commitment to
                  ethical manufacturing, transparency, and responsible production
                  practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
              Our Certifications
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Accredited certifications demonstrating our commitment to ethical
              manufacturing and operational compliance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* SEDEX Certification */}
            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl">
              
              <div className="flex h-48 items-center justify-center bg-muted/50">
                <img
                  src="/sedex-certification.png"
                  alt="SEDEX Certification"
                  className="h-32 w-auto object-contain"
                />
              </div>

              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold">SEDEX Certified</h3>
                  <Shield className="h-6 w-6 text-primary" />
                </div>

                <p className="mb-4 text-muted-foreground leading-relaxed">
                  SEDEX certification ensures responsible business practices,
                  ethical labor standards, safe working conditions, and
                  transparent supply chain management across our manufacturing
                  operations.
                </p>

                <Badge className="bg-secondary text-secondary-foreground">
                  Certified
                </Badge>
              </CardContent>
            </Card>

            {/* Factory License */}
            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl">
              
              <div className="flex h-48 items-center justify-center bg-muted/50">
                <img
                  src="/factory-license-certification.png"
                  alt="Factory License"
                  className="h-32 w-auto object-contain"
                />
              </div>

              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Factory License</h3>
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>

                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Our factory operates under a valid government-approved
                  manufacturing license, ensuring compliance with national
                  safety, labor, and operational regulations for textile
                  production.
                </p>

                <Badge className="bg-secondary text-secondary-foreground">
                  Licensed
                </Badge>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
