/**
 * This file is part of Fidus Writer <http://www.fiduswriter.org>
 *
 * Copyright (C) 2013 Takuto Kojima, Johannes Wilm
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

// toolbar undo / redo
(function (jQuery) {
    return jQuery.widget("IKS.toolbarundoredo", {
        options: {
            editable: null,
            toolbar: null,
            uuid: '',
            buttonCssClass: null
        },
        addButton: function (toolbar, func, funcName) {
            var buttonize, buttonset, _this = this;
            buttonset = $.Fidus.buttonset.prototype.createButtonset.call(this, this.widgetName, 1);
            buttonize = function (cmd, label) {
                var buttonElement;
                buttonElement = jQuery('<button></button>');
                buttonElement.makebutton({
                    uuid: _this.options.uuid,
                    editable: _this.options.editable,
                    label: label,
                    icon: cmd === 'undo' ? 'icon-ccw' : 'icon-cw',
                    command: cmd,
                    queryState: false,
                    cssClass: _this.options.buttonCssClass
                });
                return buttonset.append(buttonElement);
            };
            buttonize(func, funcName);
            buttonset.hallobuttonset();
            return toolbar.append(buttonset);
        },
        populateToolbar: function (toolbar) {
            this.addButton(toolbar, "undo", "Undo");
            this.addButton(toolbar, "redo", "Redo");
        },
        _init: function () {}
    });
})(jQuery);