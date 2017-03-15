
Pràctica Update i Remove

//Buscar aquellos estudiantes con dni nulo y eliminar este campo

db.getCollection('students').remove({'dni': "" }, {'dni':""},{"multi":true})



//Buscar los estudiantes de g�nero masculino y ponerles un campo nuevo 'greeting' con 'Apreciado alumno'

db.getCollection('students').update({'gender': 'H' }, { $set:{'greeting':'Apreciado alumno'}},{"multi":true})

//Buscar los estudiantes de g�nero femenino y ponerles un campo nuevo 'greeting' con 'Apreciada alumna'

db.getCollection('students').update({'gender': 'M' }, {$set: {'greeting':'Apreciada alumna'}},{"multi":true})

//Renombrar a  los estudiantes el campo phone_aux y birth_year (sin subgui�n)

db.getCollection('students').update({}, {$rename: {'phone_aux':'phone', 'birth_year':'birthyear'}},{"multi":true})



//Eliminar el tag html para aquellos libros que ya tengan el tag html5

db.getCollection('books').remove({'tags': 'html5'}, {$unset: {'tags':'html'}},{"multi":true})

//Eliminar completamente este tag (html) de todos los libros


db.getCollection('books').remove({'tags': 'html'}, {$unset: {'tags':'html'}}, {"multi":true})


//Eliminar el tag css para aquellos libros que ya tengan el tag css3

db.getCollection('books').remove({'tags': 'css3'}, {$unset: {'tags':'css'}}, {"multi":true})

//Ordenar nombre de los autores para aquellos libros con m�s de un autor


db.getCollection('books').update({author: {$size: 2}},{ $push: { author: { $each: [], $sort: -1 } }} ,{'multi':true})

//Ordenar los tags

db.getCollection('books').find({},{ $push: { tags: { $each: [ ], $sort: 1 } }} ,{'multi':true})


##############################################################################################################
//Agregar los tags "it" y "tic" a los libros sin etiquetas

db.getCollection('books').update({'tags': null }, {$set: {'tags':'it', 'tags':'tic'}},{"multi": true})


