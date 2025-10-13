import { redirect } from "next/navigation";

export default function RejoindredPage() {
  redirect("/contact?type=collectif");
}
