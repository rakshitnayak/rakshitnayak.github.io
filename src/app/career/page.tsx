import CareerTimeline from "../components/CareerTimeline/CareerTimeline";
import { fetchConfigs } from "../actions/fetchConfigs";
import { careerRoles, careerSource } from "@/lib/career";

export const metadata = {
  title: "Career | Rakshit's",
  description: "An interactive timeline of Rakshit's engineering journey.",
};

export default async function CareerPage() {
  const configs = await fetchConfigs();
  const career = configs.career ?? { source: careerSource, roles: careerRoles };
  return <CareerTimeline career={career} />;
}
