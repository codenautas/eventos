"use strict";

module.exports = function(context){
    var puedeEditar = context.user.usu_rol === 'admin' || context.user.usu_rol ==='programador';
    return context.be.tableDefAdapt({
        name:'event_states',
        title:'Event states',
        editable: true,
        fields: [
            {name: 'state'   , label:'State'  , typeName:'text' ,nullable:false},
            {name: 'name'    , label:'Name'   , typeName:'text' },
        ],  
        primaryKey:['state'],
        /*primaryKey:['indicador','cortes'], // poner acá el autonumérico*/
        /*foreignKey:[{references:'resources_areas' , fields:['mail']}]*/
    },context);
}
