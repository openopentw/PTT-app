# PTT-app

可以用來連上 PTT 的電腦版 app。

This is an app that simply wraps up the backend and frontend codes I've written before using electron and pyinstaller ([PTT-web-backend](https://github.com/openopentw/PTT-web-backend) and [PTT-web-frontend](https://github.com/openopentw/PTT-web-frontend)). Thus, the binary file maybe a little large (around 200MB). But the overall UI is great.

And since the app runs the backend itself, it will not send your password to any server other than PTT.

## Releases

[Link](https://github.com/openopentw/PTT-app/releases)

## Screenshots

<img src="https://user-images.githubusercontent.com/13679570/115244002-15cdcb80-a156-11eb-80c2-2ad753c87974.png" width="500">
<img src="https://user-images.githubusercontent.com/13679570/115244013-18302580-a156-11eb-9f19-f7c540372eaa.png" width="500">
<img src="https://user-images.githubusercontent.com/13679570/115244020-19f9e900-a156-11eb-9c23-20d3c25abd04.png" width="500">

## Steps to Manually Compile & Install

- Python >= 3.6, nodejs
- Install dependencies: Python (requirements.txt, PTT-web-backend), nodejs (package.json)
  ```bash
  $ npm install
  $ pip install -r requirements.txt
  $ git clone https://github.com/openopentw/PTT-web-backend
  $ pip install -r PTT-web-backend/requirements.txt
  ```
- Download the `build.zip` from [PTT-web-frontend/releases](https://github.com/openopentw/PTT-web-frontend/releases), and extracted into the PTT-web-backend folder
- build python binary
  ```bash
  $ npm run build-python
  ```
- pack apps
  ```bash
  $ npm run pack-app
  ```
- done!
