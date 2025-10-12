import { Status } from './global.js'

export interface Company {
  uuid: string
  user_uuid: string
  name: string
  slug: string
  siret?: string
  siren?: string
  vat_number?: string
  legal_form?: string
  address: string
  postal_code: string
  city: string
  country?: string
  phone: string
  secondary_phone?: string
  fax?: string
  website?: string
  email?: string
  email_verification_token?: string
  email_verified_at?: string
  status: Status
  is_verified: boolean
  is_active: boolean
  description?: string
  logo?: string
  comment?: string
  created_at: string
  updated_at: string
  deleted_at?: string
}

export interface CreateCompanyDTO {
  name: string
  slug: string
  siret?: string
  siren?: string
  vat_number?: string
  legal_form?: string
  address: string
  postal_code: string
  city: string
  country?: string
  phone: string
  secondary_phone?: string
  fax?: string
  website?: string
  email?: string
  description?: string
  logo?: string
  comment?: string
}

export interface UpdateCompanyDTO {
  name?: string
  slug?: string
  siret?: string
  siren?: string
  vat_number?: string
  legal_form?: string
  address?: string
  postal_code?: string
  city?: string
  country?: string
  phone?: string
  secondary_phone?: string
  fax?: string
  website?: string
  email?: string
  description?: string
  logo?: string
  comment?: string
  status?: Status
  is_verified?: boolean
  is_active?: boolean
}

export interface CompanyFilters {
  name?: string
  city?: string
  country?: string
  status?: Status
  is_verified?: boolean
  is_active?: boolean
  user_uuid?: string
}
