// file contain prisma query


import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();


// main function to  send all queries to the database
async function main() {
    // get data from databse
    const allTodo = await prisma.todoapp.findMany();
    console.log(allTodo,prisma);
    
}

main()
    .catch((e) => {
        throw e;
    })

    .finally(async () => {
        await prisma.$disconnect();
    });