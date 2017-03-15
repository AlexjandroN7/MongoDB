Querys find
//Buscar los estudiantes de g�nero masculino
db.students.find({"gender": "H"})
db.students.find({"gender": "H"}).count()
db.students.count({"gender": "H"})
-->2895

//Buscar los estudiantes de g�nero femenino
db.getCollection('students').find({"gender":"M"})

//Buscar los estudiantes nacidos en el a�o 1993
db.students.find({"birth_year": 1993})

//Buscar los libros cuyo precio est� expresado en USD
db.books.find({"price.currency": "USD"})
-->333

//Buscar los estudiantes de g�nero masculino y nacidos en el a�o 1993
db.students.find({"gender": "H", "birthYear": 1993})
db.students.find({"$and": [{"gender": "H"},{"birthYear": 1993}]})



//Buscar los estudiantes nacidos en la d�cada de los 90
db.students.find({"birth_year": {$gte: 1990, $lt: 2000}})

//Buscar los estudiantes de g�nero masculino nacidos en la 
db.students.find({"gender":"H","birth_year": {$gte: 1990, $lt: 2000}})

//Buscar los estudiantes de g�nero femenino nacidos en la d�cada de los 90
db.students.find({"gender":"M","birth_year": {$gte: 1990, $lt: 2000}})

//Buscar los estudiantes nacidos en la d�cada de los 80
db.students.find({"birth_year": {$gte: 1980, $lt: 1990}})

//Buscar los estudiantes de g�nero masculino nacidos en la d�cada de los 80
db.students.find({"gender":"H","birth_year": {$gte: 1980, $lt: 1990}})

//Buscar los libros con el tag html5
db.books.find({"tags":"html5"})

//Buscar los libros con el tag html
db.books.find({"tags":"html"})

//Buscar los libros con el tag html, html5, css o css3
db.books.find({"tags": {$in: ["html","html5","css","css3"]}})
db.books.find({$or: [{"tags": "html"},{"tags": "html5"},
                     {"tags": "css"},{"tags": "css3"}]})


//Buscar los libros que no tengan el tag html, html5, css o css3
db.books.find({"tags": {$nin: ["html","html5","css","css3"]}})

//Buscar los libros que tengan el tag 'programming' y 'agile'
db.books.find( { $and: [ { "tags": "programming" }, { "tags": "agile" } ] } )

//Buscar los estudiantes que no han nacido en el a�o 1985
db.students.find({"birth_year": 1985})

//Buscar aquellos estudiantes que hayan nacido en el a�o 1970, 1980 o 1990
db.students.find({$or: [{"birth_year": 1970},{"birth_year": 1980}, {"birth_year": 1990}]})

//Buscar aquellos estudiantes que no hayan nacido en el a�o 1970, 1980 o 1990
db.students.find({$nor: [{"birth_year": 1970},{"birth_year": 1980}, {"birth_year": 1990}]})

//Buscar los estudiantes nacidos en a�o par
db.students.find({"birth_year" : {$mod: [2,0]}})

//Buscar estudiantes nacidos en a�o par de la decada de los 70 que sean de genero masculino
db.students.find({$and: [{gender: "H"}, {"birthYear": {$mod: [2, 0], $gte: 1970, $lt: 1980}}]})
db.students.find({gender: "H", "birthYear": {$mod: [2, 0], $gte: 1970, $lt: 1980}})
-->403

//Buscar los estudiantes nacidos en año impar
db.students.find({"birthYear": {$mod: [2, 1]}})


//Buscar los estudiantes que tengan tel�fono auxiliar
db.students.find({"phone_aux" : {$exists: true}})


//Buscar los estudiantes que no tengan segundo apellido
db.students.find({ " lastname2": {$exists: false} })

//Buscar los estudiantes que tengan tel�fono auxiliar y solo un apellido
db.students.find({"phone_aux" : {$exists: true}, " lastname2": {$exists: false} })

//Buscar los libros escritos por 2 autores
db.books.find( { "author": {$size: 2}})

//Buscar los estudiantes cuyo email termine en .net
db.students.find({"email": /\.net$/i})

//Buscar los estudiantes cuyo email termine en .org
db.students.find({"email": /\.org$/i})
-->16

//Buscar los estudiantes cuyo nombre empiece por vocal
db.students.find( {$or: [ { "firstname": /^A/ }, { "firstname": /^E/ },
 { "firstname": /^I/ }, { "firstname": /^O/ }, { "firstname": /^U/ } ]})

//Buscar los estudiantes con nombre m�s largo de 13 caracteres

db.getCollection('students').find({"firstname": {$type: 2}, $where: "this.firstname.length > 13"})

//Buscar los estudiantes con 3 o m�s vocales en su nombre

db.students.find({"firstname": /^.*[aeiou].*[aeiou].*[aeiou].*$/i})

//Buscar los estudiantes cuyo dni empiece por letra
db.students.find({"dni": /^\D{1}/i})

//Buscar los estudiantes cuyo dni empiece y termine por letra
db.students.find({"dni": /^\D{1}.*\D{1}$/i})

//Buscar los estudiantes cuyo tel�fono empiece por 622.

db.students.find({$or: [{"phone": /^622\./i},{"phone_aux": /^622\./i}]})

//Eliminar los estudiantes con dni asignado a "NULL"
db.students.update({"dni": "NULL"}, 
                   {$unset:{"dni": ""}},
				   {"multi": true})


//Buscar los estudiantes que no tienen dni
db.students.find({"dni": {$exists: false}})				   
			
