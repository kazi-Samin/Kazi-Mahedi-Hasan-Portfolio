import { friends } from "@/lib/friends";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return Response.json(friends);
}
