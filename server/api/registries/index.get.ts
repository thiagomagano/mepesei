export default eventHandler(() => {
  const registries = useDrizzle().select().from(tables.registries).all();

  return registries;
});
