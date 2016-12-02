"use strict";

angular.module("env_logger", []).factory('logger', [function () {

    function consoleProto(key) {
        var newLog = console[key].bind(console);
        if (Function.prototype.bind) {
            newLog = Function.prototype.bind.call(console[key], console);
        } else {
            newLog = function () {
                Function.prototype.apply.call(console[key], console, arguments);
            };
        }
        return newLog;
    }

    var nolog = function () {}, env, hostname = window.location.hostname;
    return {
        log: consoleProto("log"),
        warn: consoleProto("warn"),
        error: consoleProto("error"),
        debug: consoleProto("debug"),
        configEnv: function (all_envs) {
            for (var one_env in all_envs) {
                if (hostname == all_envs[one_env]) {
                    env = one_env;
                }
            }
        },
        enableLogger: function () {

            for (var args = [], i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            if (args.indexOf(env) == -1) {
                this.log = nolog;
                this.warn = nolog;
                this.error = nolog;
            }
        }
    };

}])
