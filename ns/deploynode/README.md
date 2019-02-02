https://docs.google.com/document/d/1Kt1k1_EvcE5-TCqoL0SOfCGcYTApwyWkIDSdihjJBNI/edit?usp=sharing

������� ��������� ���������� �� Node.js
https://github.com/marinintim/app-to-deploy
��������� ���������� �� ���� ������
������� ����� �������� ���������� �� �������, ����� ���� ������������ � ���� ��������.

��������� ��������
��������� � ����� ����������, ������ npm install.

����� ������ npm start, ���������� ������ ����������� �� 3000 �����.

SSH-����
����� ������� ����� ssh-����. �� ����������� ��� ����������� � ���������.

������� �� Digital Ocean
����������� �����, � ������� ����� ������� ������ ��� �������������.

������������������ � �������� $10. ����� ������ �� �����������.

����� ����� ����� �������� ���� ��������� ssh-����.

������ ���������
����������� ������ ���������� Droplet �� DO, �� ������ �������� � �� �������, �� ���� ���� � �� ��.

������: ������, ������: $5.

����������� ��������� ��� ssh-����.

������� �� SSH
��� ����� ����������� IP-����� �������, ��� ����� �����, ���� ������� ��������� � ������ ���������� DO.

$ ssh root@�����.����.�����
�� Windows ����� ������������ PuTTY.

������������� � ���������
$ ls # ��� ������
$ pwd # ��� ��
$ whoami # ��� ����� �������������
$ adduser app # ������ ������������ ��� ����������
$ cd /home/app
$ apt-get update; apt-get upgrade
$ apt-get install nginx
$ su -u app bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
��������� �����������

����������� �����������, 
/home/app
nvm install v10.13.0
npm install.

��������� ����������
npm start

����������� nginx
root
apt-get install nginx

conf

nginx asbelow
ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf

����������� DNS

���������� ���������� ���������������
��� ����� � /etc/systemd/system/app-to-deploy.service

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

������ ��������� ��������
������� ���������
��� ������ ������?
����� ��������� HTTPS � letsencrypt. ��� ����� �������� Release It!.

Daria Moreno-Gogoleva, [24.11.18 17:45]
#!/bin/bash
source ~/.nvm/nvm.sh
nvm use default
./bin/www

Daria Moreno-Gogoleva, [24.11.18 17:45]
/home/app/app-to-deploy/bin/www.sh

Daria Moreno-Gogoleva, [24.11.18 17:46]
chmod +x /home/app/app-to-deploy/bin/www.sh

