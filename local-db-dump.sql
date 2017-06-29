

--prepare.sql-- no prepare.sql


set role to "events_user";
drop schema if exists "events" cascade;
create schema "events";
grant usage on schema "events" to "events_user";
set search_path = "events";

create table "events" (
  "event" text, 
  "name" text NOT NULL, 
  "description" text, 
  "event_creator" text NOT NULL, 
  "type" text NOT NULL, 
  "state" text, 
  "date_time_since" date, 
  "date_time_until" date, 
  "duration" interval
, primary key ("event")
);
grant select, insert, update, delete on "events" to "events_user";


create table "event_types" (
  "type" text, 
  "name" text
, primary key ("type")
);
grant select, insert, update, delete on "event_types" to "events_user";


create table "event_states" (
  "state" text NOT NULL, 
  "name" text
, primary key ("state")
);
grant select, insert, update, delete on "event_states" to "events_user";


create table "resources" (
  "resource" text, 
  "name" text NOT NULL, 
  "type" text, 
  "mail" text NOT NULL, 
  "description" text
, primary key ("resource")
);
grant select on "resources" to "events_user";


create table "users" (
  "username" text NOT NULL, 
  "md5pass" text, 
  "active_until" date, 
  "locked_since" date, 
  "rol" text
, primary key ("username")
);
grant select, insert, update, delete on "users" to "events_user";



-- pre-ADAPTs
-- no pre-adapt.sql




-- DATA


-- ADAPTs
-- no adapt.sql


-- FKs
