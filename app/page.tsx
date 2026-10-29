import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">WalkRound</h1>
      <p className="max-w-sm text-muted-foreground">
        Photo evidence of machine condition at check-out and check-in. Coming
        soon.
      </p>
      <Button disabled>Start free 30-day trial</Button>
    </main>
  );
}
