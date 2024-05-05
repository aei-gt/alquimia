frappe.ui.form.on("Work Order", {
    validate: function(frm, dt, dn) {
        if(frm.is_new()){        
            frappe.db.get_doc('BOM', frm.doc.bom_no)
            .then(doc => {
                for(let row of frm.doc.required_items){
                    for(let child of doc.items)
                    if (row.item_code == child.item_code){
                        frappe.model.set_value(row.doctype, row.name, "custom_uom", child.uom)
                        continue;
                    }
                    
                }
            })
        }
    }
});