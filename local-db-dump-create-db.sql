create user "events_user" nologin;
create user "events_user" password 'eventpass1234';
create database "events_db" owner "events_user";
grant connect, temporary on database "events_db" to "events_user";
\c "events_db"
