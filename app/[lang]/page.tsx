export default function Home({ params }: { params: { lang: string } }) {
  return (
    <main>
      <h1>Welcome to memori. ({params.lang})</h1>
    </main>
  )
}