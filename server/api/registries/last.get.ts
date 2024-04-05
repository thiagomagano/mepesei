import { desc } from "../../utils/drizzle";

export default eventHandler(async () => {
  const lastRegistry = await useDrizzle()
    .select()
    .from(tables.registries)
    .orderBy(desc(tables.registries.createdAt))
    .limit(1);

  return lastRegistry[0];
});
