CREATE TABLE public.consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  concern text NOT NULL CHECK (char_length(concern) BETWEEN 2 AND 120),
  service text NOT NULL CHECK (service IN ('Hair Transplant','Hair Loss Treatment','PRP','GFC','Skin Treatment','Acne / Acne Scars','Pigmentation','Other')),
  preferred_date date,
  preferred_time text CHECK (preferred_time IS NULL OR char_length(preferred_time) <= 30),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.consultation_requests TO service_role;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;