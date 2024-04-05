export default eventHandler(async (event) => {
  const { weight, date } = await readBody(event);

  const registry = useDrizzle()
    .insert(tables.registries)
    .values({
      weight,
      date,
      createdAt: new Date(Date.now()),
    })
    .returning()
    .get();

  return registry;
});
