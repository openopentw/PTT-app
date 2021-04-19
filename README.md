# PTT-app

This is an app that simply wrap up the backend and frontend codes I wrote before ([PTT-web-backend](https://github.com/openopentw/PTT-web-backend) and [PTT-web-frontend](https://github.com/openopentw/PTT-web-frontend)) using electron and pyinstaller. Thus, the binary file maybe a little large (around 200MB). But the overall UI is great.

## Releases

[Link](https://github.com/openopentw/PTT-app/releases)

## Manually Compile & Installation

- Python >= 3.6, nodejs
- Install dependency: Python (requirements.txt, PTT-web-backend), nodejs (package.json)
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
