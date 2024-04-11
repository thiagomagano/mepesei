export default eventHandler(async (event) => {
  try {
    const { id, weight, date } = await readBody(event);
    const registry = useDrizzle()
      .update(tables.registries)
      .set({
        weight,
        date,
      })
      .where(eq(tables.registries.id, id))
      .returning()
      .get();
    return registry;
  } catch (error) {
    console.log(error);
    setResponseStatus(event, 500, "Erro Interno");
  }
});
