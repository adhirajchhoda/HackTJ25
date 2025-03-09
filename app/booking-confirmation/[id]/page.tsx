import Link from "next/link"
import { CheckCircle2, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingConfirmationPage({ params }: { params: { id: string } }) {
  // In a real app, this would fetch the booking details from the API
  const booking = {
    id: params.id,
    item: {
      title: "Professional DSLR Camera Kit",
      image: "/placeholder.svg?height=200&width=300",
      location: "San Francisco, CA",
    },
    dates: {
      pickup: "March 19th, 2025",
      return: "March 21st, 2025",
      duration: "2 days",
    },
    price: {
      base: 70,
      deposit: 200,
      serviceFee: 7,
      total: 277,
    },
    owner: {
      name: "Alex Johnson",
      responseTime: "usually responds within 1 hour",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-10">
        <div className="mb-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Booking Request Sent!</h1>
          <p className="text-muted-foreground">
            Your request has been sent to the owner. They {booking.owner.responseTime}.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <img
                src={booking.item.image || "/placeholder.svg"}
                alt={booking.item.title}
                className="rounded-lg w-24 h-24 object-cover"
              />
              <div>
                <h3 className="font-medium">{booking.item.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {booking.item.location}
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start">
                <Calendar className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium">Pickup Date</div>
                  <div className="text-sm text-muted-foreground">{booking.dates.pickup}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
                <div>
                  <div className="font-medium">Return Date</div>
                  <div className="text-sm text-muted-foreground">
                    {booking.dates.return} ({booking.dates.duration})
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Rental fee ({booking.dates.duration})</span>
                <span>${booking.price.base}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Security deposit (refundable)</span>
                <span>${booking.price.deposit}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Service fee</span>
                <span>${booking.price.serviceFee}</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Total</span>
                <span>${booking.price.total}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col space-y-2">
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">Go to Dashboard</Button>
            </Link>
            <Link href={`/items/${params.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Item Details
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Booking reference: #{booking.id}</p>
          <p className="mt-1">You'll receive a confirmation email with these details.</p>
        </div>
      </div>
    </div>
  )
}

