"use strict";
var MonsterModel = (function () {
    function MonsterModel(name, power, _id) {
        this.name = name;
        this.power = power;
        this._id = _id;
    }
    Object.defineProperty(MonsterModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    MonsterModel.prototype.getImgUrl = function () {
        return "public/img/monster/" + this.name + ".png";
    };
    return MonsterModel;
}());
exports.MonsterModel = MonsterModel;
//# sourceMappingURL=monster.model.js.map