"use strict";

/*jshint eqnull:true */
/*jshint node:true */
/*eslint-disable no-console */

// APP

var Path = require('path');

function inlineLog(whatEver){
    console.log(whatEver);
    return whatEver;
}

if(process.argv[2]=='--dir'){
    process.chdir(process.argv[3]);
    console.log('cwd',process.cwd());
}

var extensionServeStatic = require('extension-serve-static');

var changing = require('best-globals').changing;
var backend = require("backend-plus");
var MiniTools = require("mini-tools");
var jsToHtml=require('js-to-html');
var html=jsToHtml.html;



class AppEvents extends backend.AppBackend{
    constructor(){
        super();
    }
    configList(){
        return super.configList().concat([
            'def-config.yaml',
            'local-config.yaml'
        ]);
    }
    log(condition, f){
        if(new Date(this.config.log[condition])>new Date()){
            console.log(f());
        }
    }
/*    addUnloggedServices(mainApp, baseUrl){
        var be = this;
    });    */

    getMenu(context){
        return {menu:[
            /*{menuType:'menu', name:'Variables de Indicadores', menuContent:[
                {menuType:'table', name:'cant_per_hog'    , label:'Cantidad de personas en el hogar'      },
                {menuType:'table', name:'c_asist'         , label:'Condición de asistencia escolar'       },
            ]},*/
            {menuType:'table'    , name:'Events'           , table:'events'       },
            {menuType:'table'    , name:'Types of events'  , table:'event_types'  },
            {menuType:'table'    , name:'State of event'   , table:'event_states' },
            {menuType:'table'    , name:'Resources'        , table:'resources'    },
            {menuType:'table'    , name:'Users'            , table:'users'        }
        ]}
    }
    getTables(){
        return super.getTables().concat([
            'events',
            'event_types',
            'event_states',
            'resources',
            'users',
        ]);
    }
}

process.on('uncaughtException', function(err){
  console.log("Caught exception:",err);
  console.log(err.stack);
  process.exit(1);
});

process.on('unhandledRejection', function(err){
  console.log("unhandledRejection:",err);
  console.log(err.stack);
});

new AppEvents().start();
