const request = require("supertest");
const app = require("../app");

describe("Autenticação e Perfis", () => {
  let tokenAdmin;
  let tokenComum;

  test("Login válido para admin", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "admin@email.com",
      senha: "123456"
    });
    expect(res.statusCode).toBe(200);
    tokenAdmin = res.body.token;
  });

  test("Acesso admin permitido", async () => {
    const res = await request(app)
      .get("/usuarios/admin")
      .set("Authorization", `Bearer ${tokenAdmin}`);
    expect(res.statusCode).toBe(200);
  });

  test("Login válido para comum", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "usuario@email.com",
      senha: "123456"
    });
    tokenComum = res.body.token;
  });

  test("Acesso comum negado", async () => {
    const res = await request(app)
      .get("/usuarios/admin")
      .set("Authorization", `Bearer ${tokenComum}`);
    expect(res.statusCode).toBe(403);
    expect(res.body.erro).toMatch(/restrito/i);
  });
});
