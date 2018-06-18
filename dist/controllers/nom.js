"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /
 * Home page.
 */
exports.nom = (req, res) => {
    res.render("nom", {
        title: "Nom"
    });
};
/**
 * POST /account/delete
 * Delete user account.
 */
exports.postSearchRequest = (req, res, next) => {
    const name = req.body.name;
    // req.flash("gruezi", { msg: " yo name is " });
    req.flash("success", { msg: " go to  " + name });
    res.redirect("/nom");
};
//# sourceMappingURL=nom.js.map