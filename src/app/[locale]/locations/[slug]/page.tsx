import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import LocationClientPage from "./LocationClientPage";

export default async function LocationPage() {
  const rawPhysios = await client.fetch(`*[_type == "physiotherapist"] | order(order asc)`);
  const sanityPhysios = rawPhysios.map((p: any) => ({
    name: p.name,
    title: p.title,
    bio: p.bio,
    branch: p.branch,
    image: p.image ? urlForImage(p.image)?.url() : null
  }));

  return <LocationClientPage sanityPhysios={sanityPhysios} />;
}
