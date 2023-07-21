"use strict";
// file contain prisma query
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// main function to  send all queries to the database
async function main() {
    // get data from databse
    const allTodo = await prisma.todoapp.findMany();
    console.log(allTodo, prisma);
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=script.js.map