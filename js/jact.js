// method to extend classes, taken from prototype
Object.extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
}


// base class
var ActiveResourceJ = {
    version: '0.1',
    url: '',
    getUrl: function() {
        return ( this.url ? this.url :  ActiveResource.url ) + this.resource + ".json";
    }
    ,
    findAll: function(callback) {
        if (!this.resource)
        {
            // find way to issue exception or similar.
            return null;
        }alert("ab");

        $.getJSON( this.getUrl(), callback);
    },
    save: function(o, callback) {
        if (o.id)
        {
            // update
            $.ajax({
                type: "PUT",
                dataType: "json",
                url: this.getUrl(),
                data: o,
                success: callback
            });
        }
        else
        {
            // insert
            $.ajax({
                type: "POST",
                dataType: "json",
                url: this.getUrl(),
                data: o,
                success: callback
            });
        }
    }
    ,
    remove: function(o, callback) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: this.getUrl(),
            data: o,
            success: callback
        });

    }
}


var ActiveResource = function() {
    this.version = '0.1';
    this.url = '';
    this.getUrl = function() {
        return ( this.url ? this.url :  ActiveResource.url ) + this.resource + ".json";
    };

    this.findAll = function(callback) {
        if (!this.resource)
        {
            // find way to issue exception or similar.
            return null;
        }alert("ab");

        $.getJSON( this.getUrl(), callback);
    };

    this.save = function(o, callback) {
        if (o.id)
        {
            // update
            $.ajax({
                type: "PUT",
                dataType: "json",
                url: this.getUrl(),
                data: o,
                success: callback
            });
        }
        else
        {
            // insert
            $.ajax({
                type: "POST",
                dataType: "json",
                url: this.getUrl(),
                data: o,
                success: callback
            });
        }
    };

    this.remove = function(o, callback) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: this.getUrl(),
            data: o,
            success: callback
        });

    };
}