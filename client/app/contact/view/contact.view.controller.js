var app = angular.module("usedCarsApp", []);

app.controller("contactViewCtrl", ["$scope", "ContactService", function($scope, ContactService) {
    console.log("contact view controller");
    var editIndex = -1;
    $scope.contacts = []
    var setContactList = function () {
        ContactService.getContactList().then(function(list) {
            $scope.contacts = list;
            console.log($scope.contacts);
            console.log(list);
        })
    }
    setContactList();
    
    $scope.addContact = function () {
        console.log("adding contact");
        ContactService.addContact();
    }
    
    $scope.remove = function (index) {
        var contact = $scope.contacts[index];
        console.log ("removing contact: " + contact.name);
        ContactService.deleteContact(contact._id);
        setContactList();
    }
    
    $scope.isEditing = function (index) {
        return index === editIndex;
    }
    
    $scope.edit = function (index) {
        editIndex = index;
    }
    
    $scope.update = function (contact) {
        ContactService.editContact(contact);
        setContactList();
    }
}]);