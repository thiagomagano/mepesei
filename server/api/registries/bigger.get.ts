import { asc } from "drizzle-orm";

export default eventHandler(async () => {
  const bigger = await useDrizzle()
    .select()
    .from(tables.registries)
    .orderBy(desc(tables.registries.weight))
    .limit(1);

  return bigger[0];
});
