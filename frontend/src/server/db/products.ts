import { data } from "@/data/products";
import { cache } from "@/lib/cache";

export const getBestSellers = cache(() => data, ["best-sellers"], {
  revalidate: 3600,
});
