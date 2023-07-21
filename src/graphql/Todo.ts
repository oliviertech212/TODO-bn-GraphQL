import { intArg, objectType } from "nexus"; // to create new type in graphql schema
import { extendType, nonNull, stringArg } from "nexus";  
import { resolve } from "path";
import { NexusGenObjects } from "../../nexus-typegen";


export const TODO = objectType({
    name: "Todo", //define name of type
    definition(t) {  //different field that get added to the type
        t.nonNull.int("id");  //add field id of type Int
        t.nonNull.string("description"); 
        t.nonNull.boolean("isDone");
    },
});


// create a feed query to return all the created todo objects
export const LinkQuery = extendType({  
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("todo", {  
            type: "Todo",
            resolve(parent, args, context, info) {   
                return context.prisma.todoapp.findMany()
            },
        });


        // get single link by its id 
        t.nonNull.field("singletodo", {  
            type: "Todo",
            args:{
               id:nonNull(intArg())
            },
            resolve(parent, args, context) {   
                const singletodo =context.prisma.todoapp.findUnique({where : {id:args.id}});

                return singletodo;

            }
        });
    },
});

// create mutation 
export const LinkMutation = extendType({
    type:"Mutation",
    definition(t) {
        t.nonNull.field("posttodo",{
            type:"Todo",
            args:{
                description: nonNull(stringArg())
            },
            resolve(parent,args,context){
                const  { description} = args;
                
                if (description.trim() === '') {
                    throw new Error('Description cannot be empty');
                  }

                const newTodo = context.prisma.todoapp.create({  
                    data: {
                        description: description
                    }
                });
                return newTodo;
            }

        });

        // delete single link
        t.nonNull.field("deletetodo",{
            type:"Todo",
            args:{
                id:nonNull(intArg()) 
            },
            resolve(parent, args, context) {
                const { id } = args;
                const deletetodo=context.prisma.todoapp.delete({where:{id:args.id}})
            
                if (deletetodo) {
                  return deletetodo;
                }
            
                return null;
            }
        });



        // update single link
        t.nonNull.field("updatetodo", {
            type: "Todo",
            args: {
              id: nonNull(intArg()),
            },
            resolve(parent, args, context) {
              const { id} = args;
              const updatetodo=context.prisma.todoapp.update(
                {
                    where:{
                        id:args.id
                    },
                    data:{
                        // description:args.description,
                        isDone:true
                    }}
                )
      
              if (updatetodo) {
                return updatetodo;
              }
      
              return null;
            }
        });

       
        
    }
})