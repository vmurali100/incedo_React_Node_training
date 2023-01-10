const db = require('../Config/db');
class RegisterUser
{
   id = 1;
   constructor(name,company,email,phone,subject)
   {
     this.name = name,
     this.company = company,
     this.email = email,
     this.phone = phone,
     this.subject = subject
   }
   async save()
   {
      let sql = `insert into users2(username,company,email,phone,subject)values('${this.name}','${this.company}','${this.email}','${this.phone}','${this.subject}')`;
      this.id++;
      var [newPost,_] = await db.execute(sql);
      return newPost;
   }

    static async findAllRegisterUsers()
   {
      let sql = `select * from users2`;
      var users =await db.execute(sql);
      return users;
   }

   async update(id)
   {
      let sql = `update users2 set username='${this.name}',company='${this.company}',email='${this.email}',phone='${this.phone}',subject='${this.subject}' where userid = ${id}`;
      var users = await db.execute(sql);
      return users;
   }

   static async delete(id)
   {
      console.log("inside delete");
      let sql = `delete from users2 where userid=${id}`;
      console.log(await db.execute(sql));
   }
}

module.exports = RegisterUser;