import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string()
    },
    handler:async(ctx,args)=>{
        //if user already exist
        const userData=await ctx.db.query('users')
        .filter(q=>q.eq(q.field('email'), args.email))
        .collect();

        //if not then add new user
        if(userData?.length==0){



            
            const result=await ctx.db.insert('users', {

            })
        }
    }
})