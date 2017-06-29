"use strict";

module.exports = function(context){
    var puedeEditar = context.user.usu_rol === 'admin' || context.user.usu_rol ==='programador';
    return context.be.tableDefAdapt({
        name:'resource_types',
        title:'Resource types',
        editable: puedeEditar,
        fields: [
            {name: 'type'   , label:'Type'  , typeName:'text'     },
            {name: 'name'   , label:'Name'  , typeName:'text'     },
        ],  
        primaryKey:['type'],
/*        primaryKey:['indicador','cortes'], // poner acá el autonumérico*/
       /* foreignKey:[{references:'event_types' , fields:['type']       },
                    {references:'event_states', fields:['state']      },
                    {references:'users'       , fields:['event_owner']}
        ]*/
    });
}