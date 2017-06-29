"use strict";

module.exports = function(context){
    var puedeEditar = context.user.usu_rol === 'admin' || context.user.usu_rol ==='programador';
    return context.be.tableDefAdapt({
        name:'event_types',
        title:'Event types',
        editable: true,
        fields: [
            {name: 'type'   , label:'Type'  , typeName:'text'     },
            {name: 'name'   , label:'Name'  , typeName:'text'     },
        ],  
        primaryKey:['type'],
       /* foreignKey:[{references:'event_types' , fields:['type']       },
                    {references:'event_states', fields:['state']      },
                    {references:'users'       , fields:['event_owner']}
        ]*/
    });
}