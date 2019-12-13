const todos = ["Buy milk", "Walk dog"];

export default async (ctx, next) => {
  if (ctx.path === "/api/todos") {
    if (ctx.method === "GET") {
      ctx.response.body = todos;
    } else if (ctx.method === "POST") {
      const { item } = ctx.request.body;
      todos.push(item);
      ctx.response.body = todos;
      ctx.response.status = 200;
    }
  }
  await next();
};
