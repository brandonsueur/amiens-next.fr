import { Status } from './global.js'

export enum DocumentType {
  // Documents d'entreprise
  COMPANY_REGISTRATION = 'company_registration', // Extrait Kbis, Certificate of Incorporation
  ARTICLES_OF_ASSOCIATION = 'articles_of_association', // Statuts
  BOARD_RESOLUTION = 'board_resolution', // PV d'AG
  SHARE_REGISTER = 'share_register', // Registre des actionnaires

  // Documents fiscaux
  VAT_CERTIFICATE = 'vat_certificate', // Certificat TVA
  TAX_REGISTRATION = 'tax_registration', // Numéro fiscal
  TAX_DECLARATION = 'tax_declaration', // Déclaration fiscale

  // Documents sociaux
  SOCIAL_SECURITY_REGISTRATION = 'social_security_registration', // URSSAF
  EMPLOYEE_REGISTER = 'employee_register', // Registre du personnel
  WORK_ACCIDENT_INSURANCE = 'work_accident_insurance', // Assurance AT/MP

  // Licences et autorisations
  BUSINESS_LICENSE = 'business_license', // Licence d'exploitation
  ALCOHOL_LICENSE = 'alcohol_license', // Licence de débit de boissons
  FOOD_HANDLING_PERMIT = 'food_handling_permit', // Permis de manipulation d'aliments
  MUSIC_LICENSE = 'music_license', // Licence musicale SACEM
  TERRACE_PERMIT = 'terrace_permit', // Autorisation de terrasse

  // Sécurité et santé
  FIRE_SAFETY_PERMIT = 'fire_safety_permit', // Permis de sécurité incendie
  HEALTH_PERMIT = 'health_permit', // Autorisation sanitaire
  ERP_CLASSIFICATION = 'erp_classification', // Classement ERP

  // Assurances
  LIABILITY_INSURANCE = 'liability_insurance', // RC professionnelle
  PROPERTY_INSURANCE = 'property_insurance', // Assurance locaux

  // Autres
  LEASE_AGREEMENT = 'lease_agreement', // Bail commercial
  BANK_GUARANTEE = 'bank_guarantee', // Caution bancaire
  OTHER = 'other',
}

export enum DocumentCategory {
  LEGAL = 'legal', // Documents légaux
  TAX = 'tax', // Documents fiscaux
  SOCIAL = 'social', // Documents sociaux
  LICENSE = 'license', // Licences et autorisations
  SAFETY = 'safety', // Sécurité et santé
  INSURANCE = 'insurance', // Assurances
  REAL_ESTATE = 'real_estate', // Immobilier
  FINANCIAL = 'financial', // Documents financiers
  OTHER = 'other',
}

export interface LegalDocument {
  uuid: string
  companyUuid?: string
  venueUuid?: string
  type: DocumentType
  category: DocumentCategory
  name: string
  description?: string
  country: string
  isMandatory: boolean
  filePath?: string
  originalFilename?: string
  fileSize?: number
  mimeType?: string
  issuedAt?: string
  expiresAt?: string
  status: Status
  isVerified: boolean
  verifiedAt?: string
  verifiedByUuid?: string
  verificationComments?: string
  notes?: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface CountryLegalRequirement {
  uuid: string
  countryCode: string
  countryName: string
  documentType: DocumentType
  category: DocumentCategory
  name: string
  description?: string
  isMandatory: boolean
  appliesToCompanies: boolean
  appliesToVenues: boolean
  applicableLegalForms?: string[]
  applicableActivities?: string[]
  minEmployees?: number
  maxEmployees?: number
  validityPeriodMonths?: number
  reminderDaysBefore?: number
  priority: number
  isActive: boolean
  notes?: string
  legalReference?: string
  officialUrl?: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface RequiredDocumentsQuery {
  countryCode: string
  forCompanies?: boolean
  forVenues?: boolean
  mandatoryOnly?: boolean
  legalForm?: string
  employeeCount?: number
}

export interface DocumentUpload {
  type: DocumentType
  category: DocumentCategory
  name: string
  description?: string
  country: string
  companyUuid?: string
  venueUuid?: string
  file: File
  issuedAt?: string
  expiresAt?: string
  notes?: string
}
