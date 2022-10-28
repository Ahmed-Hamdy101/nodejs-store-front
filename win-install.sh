bash  ./shell/shape.sh
mkdir ./commands 
echo "DIR CREATED SUCCFULLY"
cd commands
echo '
gx=C:\Program Files\Git\bin\bash.exe $T

udip=nslookup www.udacity.com.cdn.cloudflare.net $T

usrwh= cd c:/users && start %username% $T

serve=nslookup -server 127.0.0.1 $T

root=whoami && hostname$T

t-help=bash help.sh

go= start cd c:/users/%username% $T

ls-src=tree src $T

wi-del=del migrations  $T

li-del=rm migrations  $T

ps=powershell $T

repo=start https://github.com/Turria101/StoreFront/ && echo  please hit enter  && bash  read $T 

store=psql -U postgres -d postgres -c CREATE DATABASE store; $T

user-tb=cd migrations/sql && echo ' \' ' CREATE TABLE user_tb(id uuid DEFAULT uuid_generate_v4() PRIMARY KEY ,f_name VARCHAR(100),l_name VARCHAR(50),passwords VARCHAR(100)); ' \' ' > *b-up.sql $T

mi-create=db-migrate create order-table --sql-file && db-migrate create product-table --sql-file && db-migrate create order-table --sql-file $T

conn=psql -U udacity -d store $T

list=psql -U udacity -d store -l $T

dist=psql -U udacity -d store -c \dt $T

reset=db-migrate reset $T

down=db-migrate down $T

up=db-migrate up  $T

ifip=ipconfig $T

y-de=yarn dev $T

y-st=yarn start $T

ls=dir $T

t-t=tree $T

/= cd $T

\=cd ..
'>  macros.doskey
echo "DOSKEY CREATED SUCCUSSFULLY"
cd ..

cd commands

cp  ../shell/*.cmd  ./

pwd

START regdie.cmd 

echo "REGISTRY DONE"

cp  ../shell/*.sh  ./
echo "SHELL CREATED SUCCFULLY"

echo "type 't-help' for help commands.... for more information conntect me @Turria101 '"

bash help.sh