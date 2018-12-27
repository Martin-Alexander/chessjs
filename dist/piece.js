"use strict";
exports.__esModule = true;
var PieceColour;
(function (PieceColour) {
    PieceColour["Black"] = "black";
    PieceColour["White"] = "white";
})(PieceColour = exports.PieceColour || (exports.PieceColour = {}));
var PieceType;
(function (PieceType) {
    PieceType["Pawn"] = "pawn";
    PieceType["Knight"] = "knight";
    PieceType["Bishop"] = "bishop";
    PieceType["Rook"] = "rook";
    PieceType["Queen"] = "queen";
    PieceType["King"] = "king";
})(PieceType = exports.PieceType || (exports.PieceType = {}));
var Piece = (function () {
    function Piece(colour, type) {
        this.colour = colour;
        this.type = type;
    }
    return Piece;
}());
exports.Piece = Piece;
//# sourceMappingURL=piece.js.map