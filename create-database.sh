echo " Make Sure Your'e in Directory project Before you start these process !!!!!!!!!!!!!!!!!!!!!!!!!!! "

echo " Press any key to create store database ..........."
read
psql -U postgres -d postgres -c 'CREATE DATABASE store;'
echo " CREATED SUCSSFULLY  DATABASE !"
psql -U postgres -d postgres -c \\dt
echo " Press any key to connect to database ! "
echo " CREATED SUCSSFULLY  DATABASE !"
psql -U postgres -d postgres -c \\c store  
echo " Press any key to create .env  files"
read
echo " 
PORT=4000
PG_HOST=localhost 
PG_USER=
PG_DB=
PG_DB_TEST=
PG_PASSWORD=
PG_PORT=5432
PG_SALT_ROUND=10
PG_BCRYPY_SC=!
PG_MYTOKEN=
ENV=dev" > .env
echo " CREATED SUCSSFULLY .env  !"
echo " Let's Edit  .env  files in your own  are u ready press enter ! "
read
vi .env  
echo " Press any key to create database.json"
read
echo '{         "defaultEnv":{"ENV":"ENV"}
       ,
      "dev": {
      "driver": "pg",
      "host": {"ENV":"PG_HOST"},
      "database": {"ENV":"PG_DB"},
      "user": {"ENV":"PG_USER"},
      "password":{"ENV":"PG_PASSWORD"},
      "port":{"ENV":"PG_PORT"}
    }
  
       ,
      "test": {
      "driver": "pg",
      "host": {"ENV":"PG_HOST"},
      "database": {"ENV":"PG_DB_TEST"},
      "user": {"ENV":"PG_USER"},
      "password":{"ENV":"PG_PASSWORD"},
      "port":{"ENV":"PG_PORT"}
    }
}' > database.json
echo " Created successfully database.json  !"

echo " Packages installations .........."
yarn install 
npm install
yarn i -g db-migrate
i --save-dev @types/pg
yarn add db-migrate db-migrate-pg
echo " installations successfully  !"

echo " Let's add our  Tables .....! "
db-migrate up
echo "Tables Created Successfully !"
yarn dev
echo "Omg Server is Start  at port 4000 "
