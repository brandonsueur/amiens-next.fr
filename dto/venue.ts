import { Status } from './global.js'

export enum VenueType {
  BAR = 'bar',
  CLUB = 'club',
  ROOFTOP = 'rooftop',
  RESTAURANT = 'restaurant',
  LOUNGE = 'lounge',
  PUB = 'pub',
  BREWERY = 'brewery',
  WINE_BAR = 'wine_bar',
  COCKTAIL_BAR = 'cocktail_bar',
  NIGHTCLUB = 'nightclub',
  BEACH_CLUB = 'beach_club',
  OTHER = 'other',
}

export interface Venue {
  uuid: string
  user_uuid?: string
  name: string
  address: string
  postal_code: string
  city: string
  country?: string
  latitude?: string
  longitude?: string
  phone: string
  secondary_phone?: string
  fax?: string
  facsimile?: string
  website?: string
  email?: string
  email_verification_token?: string
  email_verified_at?: Date | null
  status: Status
  is_verified: boolean
  is_active: boolean
  deleted_at?: Date | null
  created_at: Date
  updated_at?: Date | null
  description?: string
  logo?: string
  pictures?: string[]
  timezone?: string
  hours?: VenueHours[] // Regular opening hours for each day of the week
  special_hours?: VenueSpecialHours[] // Special hours for specific dates
  comment?: string
}

export enum DayOfWeek {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export interface VenueHours {
  uuid: string
  venue_uuid: string
  day_of_week: DayOfWeek
  opening_time: string // Format: "HH:mm" (24h format)
  closing_time: string // Format: "HH:mm" (24h format)
  is_closed: boolean // True if the venue is closed this day
  is_24h: boolean // True if the venue is open 24/7 this day
  created_at: Date
  updated_at?: Date | null
}

export interface VenueSpecialHours {
  uuid: string
  venue_uuid: string
  date: Date // Specific date for special hours (holidays, events, etc.)
  opening_time?: string | null // Format: "HH:mm" (24h format)
  closing_time?: string | null // Format: "HH:mm" (24h format)
  is_closed: boolean // True if the venue is closed this specific day
  is_24h: boolean // True if the venue is open 24/7 this specific day
  reason?: string | null // Reason for special hours (holiday, event, etc.)
  created_at: Date
  updated_at?: Date | null
}

export enum VenueLegalFileStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface VenueLegalTypeFile {
  uuid: string
  type: string // e.g., 'business_license', 'tax_document', 'kyc_document', 'kbis', etc.
  description: string // A brief description of the file type
  country: string // The country this file type applies to (e.g., 'FR', 'US', etc.)
  is_active: boolean // Indicates if the file type is currently active
  is_visible: boolean // Indicates if the file type should be visible to users
  is_required: boolean // Indicates if this file type is required for venue verification
  created_at: Date
  updated_at?: Date | null
  deleted_at?: Date | null
}

export interface VenueLegalFile {
  uuid: string
  venue_uuid: string // UUID of the venue
  type: string // e.g., 'business_license', 'tax_document', 'kyc_document', 'kbis', etc.
  file_name: string
  file_type: string // e.g., 'application/pdf', 'image/jpeg'
  file_size: number // in bytes
  file_url: string // URL to access the file
  status: VenueLegalFileStatus
  is_verified: boolean
  uploaded_at: Date | null
  updated_at?: Date | null
  created_at: Date
}
