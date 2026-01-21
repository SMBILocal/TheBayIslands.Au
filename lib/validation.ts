/**
 * Zod Validation Schemas for The Bay Islands
 * Enterprise-grade input validation for all forms and API endpoints
 */

import { z } from 'zod';

// ============================================
// Basic Fields
// ============================================

const email = z
  .string()
  .email('Invalid email address')
  .toLowerCase()
  .trim()
  .describe('User email address');

const password = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .describe('Secure password');

const uuid = z.string().uuid('Invalid UUID format').describe('Unique identifier');

const positiveNumber = z.number().positive('Must be a positive number');

const slug = z.string().min(1).max(200).toLowerCase().trim();

// ============================================
// Authentication Schemas
// ============================================

export const signupSchema = z.object({
  email,
  password,
  passwordConfirm: z.string(),
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
}).refine(data => data.password === data.passwordConfirm, {
  message: 'Passwords do not match',
  path: ['passwordConfirm'],
});

export type SignupInput = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional().default(false),
});

export type SigninInput = z.infer<typeof signinSchema>;

export const resetPasswordSchema = z.object({
  email,
});

export const newPasswordSchema = z.object({
  token: z.string(),
  password,
  passwordConfirm: z.string(),
}).refine(data => data.password === data.passwordConfirm, {
  message: 'Passwords do not match',
  path: ['passwordConfirm'],
});

// ============================================
// Directory Listing Schemas
// ============================================

export const createListingSchema = z.object({
  business_name: z
    .string()
    .min(2, 'Business name must be at least 2 characters')
    .max(200, 'Business name must be less than 200 characters')
    .trim(),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(2000, 'Description must be less than 2000 characters')
    .trim(),
  category: z.enum([
    'Retail',
    'Services',
    'Food & Beverage',
    'Recreation',
    'Healthcare',
    'Transport',
    'Professional',
    'Community',
    'Real Estate',
    'Other',
  ]),
  subcategory: z.string().max(100).optional(),
  location: z.enum([
    'russell',
    'macleay',
    'lamb',
    'karragarra',
    'redland-bay',
    'wellington-point',
    'cleveland',
    'capalaba',
  ]),
  phone: z
    .string()
    .regex(/^[0-9\s\-\+\(\)]+$/, 'Invalid phone number')
    .optional()
    .or(z.literal('')),
  email: z.string().email().optional().or(z.literal('')),
  website: z
    .string()
    .url('Invalid website URL')
    .optional()
    .or(z.literal('')),
  hours: z.string().max(500).optional(),
  address: z.string().max(500).optional(),
});

export type CreateListingInput = z.infer<typeof createListingSchema>;

export const updateListingSchema = createListingSchema.partial();

export type UpdateListingInput = z.infer<typeof updateListingSchema>;

// ============================================
// Job Posting Schemas
// ============================================

export const createJobSchema = z.object({
  title: z
    .string()
    .min(5, 'Job title must be at least 5 characters')
    .max(200, 'Job title must be less than 200 characters')
    .trim(),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(5000, 'Description must be less than 5000 characters')
    .trim(),
  location: z.enum([
    'russell',
    'macleay',
    'lamb',
    'karragarra',
    'redland-bay',
    'wellington-point',
    'cleveland',
    'capalaba',
  ]),
  employment_type: z.enum(['Full-time', 'Part-time', 'Contract', 'Casual']),
  salary_range: z.string().max(100).optional(),
  salary_min: positiveNumber.optional(),
  salary_max: positiveNumber.optional(),
  deadline: z.string().datetime().optional(),
  application_url: z.string().url().optional(),
  application_email: email.optional(),
});

export type CreateJobInput = z.infer<typeof createJobSchema>;

export const updateJobSchema = createJobSchema.partial();

// ============================================
// Event Schemas
// ============================================

export const createEventSchema = z.object({
  title: z
    .string()
    .min(5, 'Event title must be at least 5 characters')
    .max(200)
    .trim(),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(3000)
    .trim(),
  start_date: z.string().datetime('Invalid start date format'),
  end_date: z.string().datetime('Invalid end date format'),
  location: z.string().min(5, 'Location required').max(500),
  category: z.enum([
    'Community',
    'Sports',
    'Arts & Culture',
    'Business',
    'Educational',
    'Social',
    'Other',
  ]),
  image_url: z.string().url().optional(),
  capacity: positiveNumber.optional(),
}).refine(
  data => new Date(data.start_date) < new Date(data.end_date),
  { message: 'End date must be after start date', path: ['end_date'] }
);

export type CreateEventInput = z.infer<typeof createEventSchema>;

export const updateEventSchema = createEventSchema.partial();

// ============================================
// Classified Schemas
// ============================================

export const createClassifiedSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200)
    .trim(),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(2000)
    .trim(),
  category: z.enum([
    'Furniture',
    'Electronics',
    'Vehicles',
    'Home & Garden',
    'Clothing',
    'Sports',
    'Services',
    'Other',
  ]),
  price: positiveNumber.optional(),
  currency: z.enum(['AUD']).optional().default('AUD'),
  location: z.string().min(5).max(500),
  contact_phone: z.string().optional(),
  image_urls: z.array(z.string().url()).max(10).optional(),
  expiry_days: z.number().int().positive().max(90).optional().default(30),
});

export type CreateClassifiedInput = z.infer<typeof createClassifiedSchema>;

export const updateClassifiedSchema = createClassifiedSchema.partial();

// ============================================
// User Profile Schemas
// ============================================

export const updateProfileSchema = z.object({
  fullName: z.string().min(2).max(100).trim().optional(),
  avatar_url: z.string().url().optional(),
  bio: z.string().max(500).optional(),
  phone: z.string().optional(),
  website: z.string().url().optional(),
  location: z.string().max(200).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

// ============================================
// Payment/Subscription Schemas
// ============================================

export const checkoutSchema = z.object({
  tier: z.enum(['free', 'starter', 'popular', 'pro', 'enterprise']),
  listing_id: uuid.optional(),
  coupon_code: z.string().max(50).optional(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;

// ============================================
// Search & Filter Schemas
// ============================================

export const searchSchema = z.object({
  q: z.string().max(200).optional(),
  category: z.string().optional(),
  location: z.string().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().min(1).max(100).default(20),
  sort: z.enum(['newest', 'popular', 'alphabetical']).optional().default('newest'),
});

export type SearchInput = z.infer<typeof searchSchema>;

// ============================================
// Validation Helper Functions
// ============================================

export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; errors: z.ZodError } {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data as T };
  }
  return { success: false, errors: result.error };
}

export function formatValidationErrors(errors: z.ZodError): Record<string, string> {
  const formatted: Record<string, string> = {};
  errors.issues.forEach(err => {
    const path = err.path.join('.');
    formatted[path] = err.message;
  });
  return formatted;
}
