mysql> create database shopdb;
Query OK, 1 row affected (0.01 sec)

mysql> create user shopper identified by 'shoppass';
Query OK, 0 rows affected (0.03 sec)

mysql> use shopdb;
Database changed

mysql> grant all privileges on shopdb to shopper;
Query OK, 0 rows affected (0.00 sec)

mysql> grant all privileges on shopdb.* to shopper;
Query OK, 0 rows affected (0.00 sec)

mysql> exit