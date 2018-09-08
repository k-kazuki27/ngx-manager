# ngx-manager
Simple Dashboard Admin App built using Angular 6 and Abgular Material

### Introduction

Provides fast, reliable and extensible starter for the development of Angular projects.

`ngx-manager` provides the following features:

*   angular-v6.0.0
*   angular/cli-v6.0.0
*   angular/material-v6.0.0
*   [ngrx-v6.0.0](https://github.com/ngrx/platform)
*   [aws-amplify-angular-v2.0.0](https://github.com/daikiojm/angular-aws-amplify)
*   Following the best practices.
*   Ahead-of-Time compilation support.
*   Production and development builds.
*   Tree-Shaking production builds.

### How to start
**Note** that this seed project requires **node >=v6.9.0 and npm >=3**.

In order to start the project use:

```bash
$ git clone https://github.com/k-kazuki27/ngx-manager.git
$ cd ngx-manager
$ npm install -g @aws-amplify/cli
$ npm install
$ amplify init
$ amplify add auth
$ amplify add storage
$ amplify push
$ npm start
```

## mat-icon
https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

## RxJS
https://www.learnrxjs.io/

## NgRX
https://github.com/ngrx/platform/tree/master/docs/schematics
アクションは『何か』が起こった時、Storeに『どんなデータ』を利用するかということを定義
Reducerは、前の状態とアクションを取り、次の状態を返す純粋な関数

ex.
https://github.com/puku0x/ngrx-todo

https://github.com/nrwl/nx

## amplify
```
npm install -g @aws-amplify/cli
```
https://aws-amplify.github.io/amplify-js/media/angular_guide.html