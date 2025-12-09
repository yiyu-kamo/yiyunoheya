create or replace function public.exchange_art(
  new_title text,
  new_pixels text,
  new_size text
)
returns jsonb
language plpgsql
as $$
declare
  result jsonb;
  new_id uuid;
begin
  insert into public.pixel_diary(title, pixels, size, created_at)
  values (new_title, new_pixels, new_size, now())
  returning id into new_id;

  select jsonb_build_object(
    'id', id,
    'title', title,
    'pixels', pixels,
    'size', size,
    'created_at', created_at
  )
  into result
  from public.pixel_diary
  where id <> new_id
    and size = new_size
  order by random()
  limit 1;

  if result is not null then
    delete from public.pixel_diary
    where id = (result->>'id')::uuid;
  end if;

  return result;
end;
$$;
