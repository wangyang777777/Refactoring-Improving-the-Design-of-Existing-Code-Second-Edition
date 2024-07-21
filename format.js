class a {
    constructor(id, title, tags, dateLastCleaned, catalogID, catalog) {
        this._id = id
        this._catalogItem = new CatalogItem(null, title, tags)
        this._lastCleaned = dateLastCleaned
    }
}
class Male extends Person {
    get genderCode() {
        return "M"
    }
}

class Female extends Person {
    get genderCode() {
        return "F"
    }
}
