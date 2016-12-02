**angular-env-logger** is an angularjs module with logger restriction based on the application environment.


Author: M. Rahul Reddy ([RahulReddy](https://github.com/mrahulreddy))

## Usage

1. Install via either [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-env-logger`
    2. download [angular-env-logger.zip](https://github.com/mrahulreddy/angular-env-logger/zipball/master)
2. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-env-logger/dist/angular-env-logger.min.js"></script>
    ```
    2. when using downloaded files
    ```html
    <script src="angular-env-logger.min.js"></script>
    ```
3. Add **`env_logger`** to your application's module dependencies

    ```JavaScript
    angular.module('app', ['env_logger']);
    ```
4. Use the factory `logger`

    ```JavaScript
    angular.module('app')
        .controller('appController', function($scope, logger){

          logger.configEnv({ //initialize it once for your application
            local : "localhost", // key : window.location.hostname
            dev : "dev.yourHost", // key : window.location.hostname
            prod : "prod.yourHost" // key : window.location.hostname
          })
          logger.enableLogger("local","dev"); //console statements are enabled for given keys.

          //In Host http://localhost:8080/your-path, this will be printed
          logger.log("to be seen in local"); //use logger.log/warn/error instead of console.log/warn/error

          //In Host http://dev.yourHost/your-path, this will be printed
          logger.log("to be seen in dev"); //use logger.log/warn/error instead of console.log/warn/error

          //In Host http://prod.yourHost/your-path, this will NOT be printed
          logger.log("to be seen in prod"); //use logger.log/warn/error instead of console.log/warn/error

        });
    ```
## Credits
Alexander Jangam ([Alex](https://github.com/AlexJangam))

## License
MIT
