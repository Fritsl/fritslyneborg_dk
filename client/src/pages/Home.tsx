import WikiPage from "@/components/WikiPage";
import { personData } from "@/data/profile";

export default function Home() {
  return <WikiPage person={personData} />;
}
