const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./casa-criativa.db')

db.serialize(function(){

    // criar a tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //         id  INTEGER PRIMARY KEY AUTOINCREMENT,
    //         img TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         url TEXT
    //     );
    // `)


    //inserir dados na tabela
    

    // //deletar  um dado da  tabela
    db.run(`DELETE FROM ideas WHERE id = ?`, [10], function(err){
        if (err) return console.log(err)

        console.log('Deletei', this)

    })

    //consultar dados na tabela
     db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })  
   
})

module.exports = db