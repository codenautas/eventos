"use strict";

module.exports = function(context){
    var puedeEditar = context.user.usu_rol === 'admin' || context.user.usu_rol ==='programador';
    return context.be.tableDefAdapt({
        name:'resources',
        editable: true,
        fields: [
            {name: 'resource'         , label:'Resource'    , typeName:'text' },
            {name: 'name'             , label:'Name'        , typeName:'text' ,nullable:false},
            {name: 'type'             , label:'Type'        , typeName:'text' },
            {name: 'mail'             , label:'Mail'        , typeName:'text' ,nullable:false},
            {name: 'description'      , label:'Description' , typeName:'text' },
        ],  
        primaryKey:['resource'],
        foreignKey:[
            {references:'resource_types'     , fields:[{source:'type'   , target:'type'    }]}
        ]
    });
}