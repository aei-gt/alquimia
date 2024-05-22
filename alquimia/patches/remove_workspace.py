import frappe

def execute():
    frappe.db.delete('Workspace', {'name': 'Alquimia'})
    frappe.db.commit()