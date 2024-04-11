export default eventHandler(async (event) => {
  try {
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
  } catch (error) {
    console.log(error);
    setResponseStatus(event, 500, "Erro Interno");
  }
});
