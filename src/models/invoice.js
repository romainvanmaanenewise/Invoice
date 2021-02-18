import { types } from "mobx-state-tree";
import ItemList from "./itemList";

const Invoice = types.model('Invoice', {
    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, { items: []})
})
.actions(self => ({
    markPaid(){
        self.is_paid = true;
    },
    markUnPaid(){
        self.is_paid = false;
    }
}))
.views((self) => ({
    status() {
        return self.is_paid ? 'paid' : 'not Paid';
    }
}))

export default Invoice;