export default eventHandler(async (event) => {
  try {
    const { id } = await readBody(event);

    await useDrizzle()
      .delete(tables.registries)
      .where(eq(tables.registries.id, id));

    setResponseStatus(event, 204);
  } catch (error) {
    console.log(error);
    setResponseStatus(event, 500, "Erro Interno");
  }
});
