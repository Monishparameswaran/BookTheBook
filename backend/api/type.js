const zod=require('zod');
const schema=zod.object({
    fullname: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
});

module.exports={schema};