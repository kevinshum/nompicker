import { Request, Response, NextFunction } from "express";


/**
 * GET /
 * Home page.
 */
export let nom = (req: Request, res: Response) => {
    res.render("nom", {
      title: "Nom"
    });
  };


/**
 * POST /account/delete
 * Delete user account.
 */
export let postSearchRequest = (req: Request, res: Response, next: NextFunction) => {
    const name = req.body.name;
    // req.flash("gruezi", { msg: " yo name is " });
    req.flash("success", { msg: " go to  " + name });
    res.redirect("/nom");
  };