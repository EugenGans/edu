https://docs.google.com/document/d/1Kt1k1_EvcE5-TCqoL0SOfCGcYTApwyWkIDSdihjJBNI/edit?usp=sharing

Деплоим небольшое приложение на Node.js
https://github.com/marinintim/app-to-deploy
Клонируем приложение на свою машину
Сначала нужно форкнуть приложение на Гитхабе, после чего склонировать к себе локально.

Запускаем локально
Переходим в папку приложения, делаем npm install.

Затем делаем npm start, приложение должно запуститься на 3000 порту.

SSH-ключ
Нужно создать новый ssh-ключ. Он понадобится для подключения к виртуалке.

Аккаунт на Digital Ocean
Понадобится карта, с которой можно списать доллар для подтверждения.

Зарегистрироваться и получить $10. Этого хватит на попробовать.

После этого нужно добавить свой публичный ssh-ключ.

Создаём виртуалку
Виртуальная машина называется Droplet на DO, на других сервисах — по другому, но суть одна и та же.

Регион: Лондон, размер: $5.

Обязательно добавляем наш ssh-ключ.

Заходим по SSH
Для этого понадобится IP-адрес сервера, его можно найти, если открыть виртуалку в панели управления DO.

$ ssh root@здесь.айпи.адрес
На Windows нужно использовать PuTTY.

Ориентируемся в виртуалке
$ ls # что вокруг
$ pwd # где мы
$ whoami # под каким пользователем
$ adduser app # создаём пользователя под приложение
$ cd /home/app
$ apt-get update; apt-get upgrade
$ apt-get install nginx
$ su -u app bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
Клонируем репозиторий

Склонируйте репозиторий, 
/home/app
nvm install v10.13.0
npm install.

Запускаем приложение
npm start

Настраиваем nginx
root
apt-get install nginx

conf

nginx asbelow
ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf

Настраиваем DNS

Заставляем приложение перезапускаться
Это пойдёт в /etc/systemd/system/app-to-deploy.service

[Unit]
Description=My node.js App

[Service]
User=app
Group=app
WorkingDirectory=/home/app/app-to-deploy
EnvironmentFile=/home/app/app_config
Environment=NODE_ENV=production
ExecStart=/home/app/app-to-deploy/bin/www.sh
Restart=always

[Install]
WantedBy=multi-user.target

Вносим изменение локально
Деплоим изменение
Что делать дальше?
Чтобы настроить HTTPS — letsencrypt. Ещё стоит почитать Release It!.

Daria Moreno-Gogoleva, [24.11.18 17:45]
#!/bin/bash
source ~/.nvm/nvm.sh
nvm use default
./bin/www

Daria Moreno-Gogoleva, [24.11.18 17:45]
/home/app/app-to-deploy/bin/www.sh

Daria Moreno-Gogoleva, [24.11.18 17:46]
chmod +x /home/app/app-to-deploy/bin/www.sh

