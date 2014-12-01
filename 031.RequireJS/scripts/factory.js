define(['container', 'item', 'section'], function (Container, Item, Section) {
    var Factory = (function () {
        function initItem (name) {
            return new Item(name, false);
        }

        function initSection (name) {
            return new Section(name);
        }

        function initContainer (name) {
            return new Container(name);
        }

        return {
            initItem: initItem,
            initSection: initSection,
            initContainer: initContainer
        }
    })();

    return Factory;
});