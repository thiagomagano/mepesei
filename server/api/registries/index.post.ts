export default eventHandler(async (event) => {
  const { weight } = await readBody(event);

  const registry = useDrizzle()
    .insert(tables.registries)
    .values({
      weight,
      date: new Date().toLocaleDateString(),
      createdAt: new Date(),
    })
    .returning()
    .get();

  return registry;
});
