export async function GET() {
  const res = await fetch(
    'https://api.github.com/repos/Shivam072001/TripathyVerse',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    return new Response('Failed to fetch stars', { status: res.status });
  }

  const data = await res.json();
  return Response.json({ stars: data.stargazers_count });
}