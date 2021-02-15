from odoo import models, fields


class Employees(models.Model):
    _inherit = "hr.employee"

    description = fields.Char(string="Descripción del empleado")
    cv = fields.Binary(string="Currículum Vitae")
