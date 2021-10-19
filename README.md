App available through: https://rzeznik-kasia.github.io/todo-list/

App was created during online workshops ng-girls. In this workshop I participate as a mentor. It was created acording to this tutorial: https://ng-girls.gitbook.io/todo-list-tutorial/, 

To deploy app to gh-pages (https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4):
1) npm i angular-cli-ghpages --save-dev
2) npm run build -- --prod --base-href "https://rzeznik-kasia.github.io/todo-list/"
3) npx angular-cli-ghpages — dir=dist/todo-list/
4) GithHub Pages setup: branch gh-pages, /root. Visit: https://rzeznik-kasia.github.io/todo-list/