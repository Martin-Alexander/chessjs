System.register([], function (exports_1, context_1) {
    "use strict";
    var PieceColour, PieceType, Piece;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (PieceColour) {
                PieceColour["Black"] = "black";
                PieceColour["White"] = "white";
            })(PieceColour || (PieceColour = {}));
            exports_1("PieceColour", PieceColour);
            (function (PieceType) {
                PieceType["Pawn"] = "pawn";
                PieceType["Knight"] = "knight";
                PieceType["Bishop"] = "bishop";
                PieceType["Rook"] = "rook";
                PieceType["Queen"] = "queen";
                PieceType["King"] = "king";
            })(PieceType || (PieceType = {}));
            exports_1("PieceType", PieceType);
            Piece = (function () {
                function Piece(colour, type) {
                    this.colour = colour;
                    this.type = type;
                }
                return Piece;
            }());
            exports_1("Piece", Piece);
        }
    };
});
//# sourceMappingURL=unit.js.map