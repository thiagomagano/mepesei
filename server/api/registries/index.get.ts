export default eventHandler(async () => {
  const registries = await useDrizzle().select().from(tables.registries).all();

  return registries;
});
