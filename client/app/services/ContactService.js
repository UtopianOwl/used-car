var app = angular.module("usedCarsApp", []);

app.service("ContactService", ["$http", function($http) {
    var self = this;
    this.contact = {};
    this.contactList = [];
    
    this.addContact = function() {
        return $http.post("/contact", self.contact).then(function(response) {
            return response;
        });
    };
    
    this.editContact = function(contact) {
        return $http.put("/auth/contacts/" + contact.id, contact).then(function(response) {
            return response.data;
        });
    };
    
    this.getContact = function(id) {
        return $http.get("/auth/contacts/" + id).then(function(response) {
            self.contact = response.data;
            return response.data;
        });
    };
    
    this.getContactList = function() {
        return $http.get("/auth/contacts").then(function(response) {
            self.contactList = response.data;
            return response.data;
        })
    };
    
    this.deleteContact = function(id) {
        return $http.delete("/auth/contacts/" + id).then(function(response) {
            return response.data;
        });
    };
}]);