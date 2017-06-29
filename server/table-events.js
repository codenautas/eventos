"use strict";

module.exports = function(context){
    var puedeEditar = context.user.usu_rol === 'admin' || context.user.usu_rol ==='programador';
    return context.be.tableDefAdapt({
        name:'events',
        editable: true,
        fields: [
            {name: 'event'              , label:'Code'            , typeName:'text'     },
            {name: 'name'               , label:'Name'            , typeName:'text' ,nullable:false},
            {name: 'description'        , label:'Description'     , typeName:'text'     },
            {name: 'event_creator'      , label:'Creator'         , typeName:'text' ,nullable:false},
            {name: 'type'               , label:'Type'            , typeName:'text' ,nullable:false},
            {name: 'state'              , label:'State'           , typeName:'text'     },
            {name: 'date_time_since'                              , typeName:'date'},
            {name: 'date_time_until'                              , typeName:'date'},
            {name: 'duration'           , label:'Duration'        , typeName:'interval' },
        ],  
        primaryKey:['event'], // poner acá el autonumérico
        foreignKey:[
            {references: 'users'          , fields:[{source:'event_creator' , target:'username'}]},
            {references:'event_types'     , fields:[{source:'type'          , target:'type'    }]},
            {references:'event_states'    , fields:[{source:'state'         , target:'state'   }]}
        ]
    },context);
}