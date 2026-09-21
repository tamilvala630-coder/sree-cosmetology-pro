CREATE POLICY "Service role manages consultation requests"
ON public.consultation_requests
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);