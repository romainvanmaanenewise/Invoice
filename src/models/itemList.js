import { types } from "mobx-state-tree";
import Item from "./item"

const ItemList = types.model("ItemList", {
    items: types.array(Item)
})
.actions(self => ({
  add(item){
      self.items.push(item);
  }
}))

export default ItemList;