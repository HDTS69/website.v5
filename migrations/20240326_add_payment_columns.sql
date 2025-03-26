-- Add new columns for payment workflow
ALTER TABLE bookings
  ADD COLUMN IF NOT EXISTS booking_id text UNIQUE,
  ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'unpaid',
  ADD COLUMN IF NOT EXISTS invoice_url text;

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_bookings_booking_id ON bookings(booking_id);

-- Update existing rows with a booking_id if they don't have one
UPDATE bookings 
SET booking_id = 'XYZ' || SUBSTR(MD5(RANDOM()::text), 1, 9)
WHERE booking_id IS NULL; 