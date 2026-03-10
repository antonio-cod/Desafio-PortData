CREATE DATABASE IF NOT EXISTS portdata_shadow;

GRANT ALL PRIVILEGES ON portdata_shadow.* TO 'user'@'%';

FLUSH PRIVILEGES;
