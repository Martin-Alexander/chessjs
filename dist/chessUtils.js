"use strict";
exports.__esModule = true;
var ChessUtils = (function () {
    function ChessUtils() {
    }
    ChessUtils.initialize = function () {
        var _this = this;
        process.stdin.on("data", function (data) {
            if (_this.acceptingUserInput) {
                _this.userInput = data.toString();
                _this.acceptingUserInput = false;
            }
        });
    };
    ChessUtils.getString = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.acceptingUserInput = true;
            setInterval(function () {
                if (_this.acceptingUserInput === false) {
                    resolve(_this.userInput.slice(0, -1));
                }
            }, 1);
        });
    };
    ChessUtils.acceptingUserInput = true;
    ChessUtils.userInput = "";
    return ChessUtils;
}());
exports.ChessUtils = ChessUtils;
//# sourceMappingURL=chessUtils.js.map