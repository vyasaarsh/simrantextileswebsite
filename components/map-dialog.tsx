"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, ExternalLink } from "lucide-react"

interface MapDialogProps {
  triggerText?: string
}

export function MapDialog({ triggerText = "View on Map" }: MapDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Google Maps coordinates for Mumbai (example)
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082197840383984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
  const googleMapsLink = "https://maps.google.com/?q=Mumbai+Maharashtra+India"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="mt-2 h-auto p-0 text-sm text-primary">
          <MapPin className="mr-1 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Our Location</DialogTitle>
          <DialogDescription>
            Simran Textiles Industrial Park, Sector 15, Textile Hub, Mumbai, Maharashtra 400001, India
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Simran Textiles Location"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button asChild variant="outline">
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
